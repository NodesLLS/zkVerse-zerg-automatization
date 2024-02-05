import sys
import itertools

from undetected_playwright.async_api import async_playwright, TimeoutError
import asyncio
import traceback

from data.config import logger, SEEDS, PROXIES
from data.settings import WALLET_PASSWORD, MAX_CONCURRENT_CONTEXTS
from utils.common import get_accounts_info
from utils.db_funcs import save_error_to_file, save_success_to_file
from models.zk_verse_client import ZkVerseClient


async def process_account(semaphore, account):
    try:
        async with semaphore:
            async with async_playwright() as p:
                async with ZkVerseClient(
                        playwright=p,
                        proxy=account['proxy'],
                        seed_phrase=account['seed'],
                        password=WALLET_PASSWORD,
                ) as zk_v_client:
                    try:
                        zk_v_client.account_points = await zk_v_client.get_all_points()
                        await zk_v_client.import_phantom_wallet()
                        zk_verse_page = await zk_v_client.sign_in_zkverse()
                        zk_verse_page = await zk_v_client.buy_tickets(zk_verse_page)
                        await zk_v_client.play_game(zk_verse_page)

                        save_success_to_file(
                            f'{zk_v_client.seed_phrase} | '
                            f'Завершенных игр: {zk_v_client.completed_games}, заработано очков: {zk_v_client.points}, '
                            f'Общее кол-во очков: {zk_v_client.account_points}'
                        )
                    except Exception as err:
                        logger.exception(f'Произошла ошибка: {err}')
                        save_error_to_file(f'{zk_v_client.seed_phrase} | Тип ошибки: {type(err).__name__} - Ошибка: {err}')
                    finally:
                        logger.info(f'{zk_v_client.masked_address} - Завершена работа аккаунта.'
                                       f'\n\t\t\t\t\t\t\t\tЗавершенных игр: {zk_v_client.completed_games}'
                                       f'\n\t\t\t\t\t\t\t\tЗаработано всего очков: {zk_v_client.points}'
                                       f'\n\t\t\t\t\t\t\t\tОбщее кол-во очков: {zk_v_client.account_points}')

    except Exception as err:
        logger.exception(f'Произошла ошибка: {err}')


async def main():
    seeds_list: list[str] = get_accounts_info(SEEDS)
    proxies_list: list[str] = get_accounts_info(PROXIES)
    cycled_proxies_list = itertools.cycle(proxies_list) if proxies_list else None

    formatted_accounts_list: list = [
        {
            'seed': current_account,
            'proxy': next(cycled_proxies_list) if cycled_proxies_list else None,
        } for current_account in seeds_list
    ]

    if len(formatted_accounts_list) == 0:
        logger.critical('Работа скрипта завершена, так как не загружены аккаунты')
        sys.exit()

    logger.info(f'Загружено в accounts.txt {len(seeds_list)} аккаунтов \n'
                f'\t\t\t\t\t\t\tЗагружено в proxiess.txt {len(proxies_list)} прокси \n')

    semaphore = asyncio.Semaphore(MAX_CONCURRENT_CONTEXTS)
    tasks = [process_account(semaphore, account) for account in formatted_accounts_list]
    await asyncio.gather(*tasks)


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info('Программа прервана пользователем')





