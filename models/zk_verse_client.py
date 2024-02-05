import asyncio
import aiohttp
import random

from typing import Union, Optional
from functools import wraps

from data.settings import WAIT_TIME, WALLET_PASSWORD, MAX_RETRY_COUNT
from data.config import PHANTOM_EXTENSION_PATH, logger
from utils.common import from_mnemonic_to_address, formatted_address

from fake_useragent import UserAgent
from undetected_playwright.async_api import Playwright, BrowserContext, Page, TimeoutError


def play_while_tickets(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        # Скрипт должен отработать как минимум 1 раз, так как изначально self.tickets = 0
        if args[0].tickets == 0:
            await func(*args, **kwargs)

        while args[0].tickets > 0:
            await func(*args, **kwargs)
        return None  # Возвращаем None, чтобы показать, что баланс тикетов пуст

    return wrapper


class ZkVerseClient:
    def __init__(
            self,
            playwright: Playwright,
            proxy=None,
            password=WALLET_PASSWORD,
            seed_phrase=None
    ):
        self.password = password
        self.seed_phrase = seed_phrase
        self.address = from_mnemonic_to_address(seed_phrase)
        self.masked_address = formatted_address(self.address)

        # browser options
        self.user_agent = UserAgent().chrome
        self.user_platform = random.choice(['macOS', 'Windows', 'Linux'])
        self.proxy = proxy
        self.playwright = playwright
        self.context: Optional[BrowserContext] = None

        # zk_verse account info
        self.fragments = 0
        self.bought_tickets = False
        self.tickets = 0
        self.points = 0
        self.account_points = 0
        self.completed_games = 0

    async def create_context(self):
        proxy = {
            "server": f'http://{self.proxy.split("@")[1]}',
            "username": f'{self.proxy[len("http://"):].split(":")[0]}',
            "password": f'{self.proxy[len("http://"):].split("@")[0].split(":")[1]}'
        } if self.proxy else None

        context = await self.playwright.chromium.launch_persistent_context(
            user_data_dir="",
            headless=False,
            proxy=proxy,
            locale='en-US',
            channel='chrome',
            args=[
                '--mute-audio',
                '--window-position=0,0',
                f"--disable-extensions-except={PHANTOM_EXTENSION_PATH}",
                f"--load-extension={PHANTOM_EXTENSION_PATH}",
            ]
        )
        context.set_default_timeout(WAIT_TIME)
        return context

    async def import_phantom_wallet(self):
        logger.debug(f'{self.masked_address} - Импортируем кошелек...')
        page = await self.context.new_page()
        await page.goto(
            "chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html"
        )
        # btn_import_wallet
        await page.get_by_test_id('import-recovery-phrase-button').click()
        # input_seed_phrase
        for i in range(0, 12):
            await page.get_by_test_id(
                f'secret-recovery-phrase-word-input-{i}'
            ).fill(self.seed_phrase.split(' ')[i])
        # btn_submit_seed_phrase
        await page.get_by_test_id('onboarding-form-submit-button').click()
        # btn_continue
        await page.locator('//*[@id="root"]/main/div[2]/form/button[2]').click()
        # input_password
        await page.get_by_test_id(
            'onboarding-form-password-input'
        ).fill(self.password)
        # input_confirm_password
        await page.get_by_test_id(
            'onboarding-form-confirm-password-input'
        ).fill(self.password)
        # input_checkbox_tos
        await page.get_by_test_id(
            'onboarding-form-terms-of-service-checkbox'
        ).check()
        # btn_submit_password
        await page.get_by_test_id('onboarding-form-submit-button').click()
        logger.success(f'{self.masked_address} - Кошелек успешно импортирован')

    async def sign_in_zkverse(self):
        logger.debug(f'{self.masked_address} - Заходим на zkverse...')
        page = await self.context.new_page()

        await page.goto(
            'https://airdrop.zkverse.gg/zerg'
        )
        logger.debug(f'{self.masked_address} - Подключаем кошелек на zkverse...')
        await page.get_by_role('button', name='Select Wallet').click()
        select_ph_wallet_xpath = '//html/body/div[2]/div[1]/div/ul/li/button'
        await page.locator(select_ph_wallet_xpath).click()
        await asyncio.sleep(5)

        logger.debug(f'{self.masked_address} - Переключаемся на окно кошелька для авторизации на zkverse...')
        phantom_page = self.context.pages[-1]
        await phantom_page.bring_to_front()
        try:
            await phantom_page.locator('button[data-testid="primary-button"]').click()
        except TimeoutError as err:
            logger.error(f'{self.masked_address} - Не удалось авторизоваться на zkverse. '
                         f'Загружаем сайт заново...')
            await page.close()
            await self.sign_in_zkverse()
        logger.success(f'{self.masked_address} - Успешно авторизовались на zkverse...')
        return page

    @play_while_tickets
    async def play_game(self, page: Page, retry_count=MAX_RETRY_COUNT):
        try:
            play_zerg_btn_xpath = '//*[@id="__next"]/div[2]/div/div/div[1]/div/div[1]/button'
            await page.locator(play_zerg_btn_xpath).click()
        except TimeoutError as err:
            log_msg = (f'Произошла ошибка таймаута при поиске PLAY ZERG кнопки: {err}, '
                       f'перезагружаем страницу...')
            await self.handle_error(
                page, error_type=TimeoutError, log_message=log_msg, retry_count=retry_count
            )

        start_game_btn_xpath = '//*[@id="__next"]/div[2]/div[1]/div/div[2]/button/p'
        start_game_btn = await page.locator(start_game_btn_xpath).element_handle()
        start_game_btn_text = await start_game_btn.inner_text()

        if 'BUY ZERG TICKET' in start_game_btn_text and self.tickets == 0:
            raise Exception(f'{self.masked_address} - '
                            f'Баланс тикетов и фрагментов для их покупки пуст')
        # тикеты получать только один раз, дальше убрать это
        if not self.bought_tickets:
            try:
                tickets_count = await self.get_tickets_count(page)
                self.tickets = tickets_count
                self.bought_tickets = True
            except ValueError as err:
                log_msg = (f'{self.masked_address} - Не удалось получить баланс тикетов. '
                           f'Перезагружаем страницу... Возможно транзакция покупки тикетов не прошла')
                await self.handle_error(
                    page, error_type=ValueError, log_message=log_msg, retry_count=retry_count
                )

        await start_game_btn.click()
        # после старта игры -1 тикет
        self.tickets = self.tickets-1

        await asyncio.sleep(5)
        logger.info(f'{self.masked_address} - Начинаем игру...')
        await page.evaluate('''
            async () => {
                await new Promise((resolve) => {
                    const intervalId = setInterval(() => {
                        const extractButton = document.evaluate('//button[p[text()="EXTRACT!"]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                        const gameOverHeader = document.evaluate('//*[@id="__next"]/div[2]/div/div[2]/div[3]/div/div[1]/h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;      
                        if (extractButton) {
                            extractButton.click();
                        } else if (gameOverHeader && (gameOverHeader.innerText === 'GAME OVER!' || gameOverHeader.innerText === 'ZERG RUSH FINISHED!')) {
                            console.log('Игра завершена');
                            clearInterval(intervalId);    
                            resolve();
                        }
                    }, 500);
                    // Багфикс: если элемент gameOverHeader не найден, то после 2 минут в любом случае завершаем игру
                    setTimeout(() => {
                        clearInterval(intervalId);
                        resolve()
                    }, 2 * 60 * 1000);
                });
            };
        ''')

        points_count_element = await page.locator('//*[@id="__next"]/div[2]/div/div[1]/div[1]/p[2]').element_handle()
        points_count = await points_count_element.inner_text()
        self.points = self.points + int(points_count)
        self.completed_games = self.completed_games + 1

        logger.success(f'{self.masked_address} - Игра завершена. Заработано очков: {points_count}.')
        logger.info(f'{self.masked_address} - Осталось {self.tickets} игр')
        await page.reload()

    async def buy_tickets(self, page: Page):
        plus_one_ticket_xpath = '//*[@id="__next"]/div[2]/div[1]/div[1]/div/div[4]/div[1]/div[3]'
        minus_one_ticket_xpath = '//*[@id="__next"]/div[2]/div[1]/div[1]/div/div[4]/div[1]/div[1]'
        buy_tickets_btn_xpath = '//*[@id="__next"]/div[2]/div[1]/div[1]/div/div[4]/div[2]/button'
        play_zerg_btn_xpath = '//*[@id="__next"]/div[2]/div/div/div[1]/div/div[1]/button'

        play_zerg_btn = await page.locator(play_zerg_btn_xpath).element_handle()
        if play_zerg_btn:
            self.fragments = await self.get_fragments_count(page)
            logger.debug(f'{self.masked_address} - {self.fragments} фрагментов на балансе')
            # если баланс фрагментов пуст, то выходим из функции и переходим к игре
            # эта проверка для того случая, когда тикеты на аккаунте уже куплены
            if self.fragments == 0:
                return page

            await play_zerg_btn.click()

        start_game_btn_xpath = '//*[@id="__next"]/div[2]/div[1]/div/div[2]/button/p'
        start_game_btn = await page.locator(start_game_btn_xpath).element_handle()
        start_game_btn_text = await start_game_btn.inner_text()

        if 'BUY ZERG TICKET' in start_game_btn_text and self.fragments > 0:
            logger.info(f'{self.masked_address} - Покупаем тикеты на {self.fragments} фрагментов')
            await start_game_btn.click()
            buy_tickets_btn = await page.locator(buy_tickets_btn_xpath).element_handle()
            if buy_tickets_btn:
                for i in range(1, self.fragments):
                    await page.locator(plus_one_ticket_xpath).click()
                await buy_tickets_btn.click()
            await asyncio.sleep(5)
            logger.debug(f'{self.masked_address} - Переключаемся на окно кошелька для покупки тикетов...')
            phantom_page = self.context.pages[-1]
            await phantom_page.bring_to_front()
            await asyncio.sleep(10)
            await phantom_page.locator('button[data-testid="primary-button"]').click()
            # здесь для корректности добавить условие, что если транзакция прошла, то все ок и тикеты на аккаунте
            # транзакция может зафейлится из-за недостаточного баланса на кошельке либо просто долго проходить
            await asyncio.sleep(10)
            self.tickets = self.fragments
            self.bought_tickets = True
            self.fragments = 0
            logger.info(f'{self.masked_address} - Куплено {self.tickets} тикетов')
            await page.reload()
            return page

        await page.reload()
        return page

    async def get_fragments_count(self, page: Page):
        fragments_selector = '//*[@id="__next"]/div[2]/div/div/div[2]/div/p'
        fragments_count_text = await page.locator(fragments_selector).inner_text()
        return int(fragments_count_text.split("you have")[1].split()[0])

    async def get_tickets_count(self, page: Page):
        tickets_selector = '//*[@id="__next"]/div[2]/div[1]/div/p'
        tickets_selector_text = await page.locator(tickets_selector).inner_text()
        # ValueError: invalid literal for int() with base 10: 'game'
        return int(tickets_selector_text.split(' ')[0])

    async def get_all_points(self):
        url = f"https://www.zkverse.gg/api/points/{self.address}"

        async with aiohttp.ClientSession() as session:
            try:
                async with session.get(url, proxy=self.proxy) as response:
                    data = await response.json()
                    return data.get('points', None)
            except Exception as err:
                logger.error(f'{self.masked_address} - '
                             f'Не удалось получить кол-во поинтов на аккаунте. '
                             f'Тип ошибки: {type(err).__name__}')
                return 'не удалось получить'

    async def handle_error(self, page, error_type, log_message, retry_count):
        if retry_count > 0:
            logger.warning(log_message)
            await page.reload()
            await self.play_game(page, retry_count=retry_count - 1)
        else:
            raise Exception(f'{self.masked_address} - Превышено максимальное количество попыток. \n'
                            f'\n\t\t\t\t\t\t\t\t\t{error_type}')
    async def close_context(self):
        await self.context.close()

    async def __aenter__(self):
        self.context = await self.create_context()  # инициализация контекст
        return self

    async def __aexit__(self, exc_type, exc_value, traceback):
        await self.close_context()
        logger.info(f'{self.masked_address} - Работа аккаунта завершена. Закрыли браузер')

