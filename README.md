---------------------------------------------------------------
zkVerse zerg automatization

Необходимо:
- Бразуер гугл-хром
- Python (у меня 3.12 версия, с этой версией точно все работает)
- Rust (для корректной загрузки библиотек при первичной установке) -> Идем на https://rustup.rs/ и скачиваем rustup‑init.exe, открываем файл установки и выбираем 1 пункт (там откроется консоль для его установки)

Далее заходим в папку проекта, копируем оттуда папку с расширением Phantom-кошелька "bfnaelmomeimhlpmgjnjophhpkkoljpa" и переносим в папку Extensions вашего гугл-хрома, на моем компе это:
C:\Program Files\Google\Chrome\Application\120.0.6099.225\Extensions
У вас путь может отличаться, если не знаете где найти, то при первичном запуске скрипта вам выдаст ошибку с необходимым путем до папки Extensions.

При первичной установке требуется открыть консоль внутри папки проекта и выполнить данные команды в указанном порядке:

1) Создаем папку с виртуальным окружением
py -m venv .venv

2)  Активируем виртуальное окружение
.venv/scripts/activate

3) Устанавливаем зависимости
pip install -r requirements.txt

Каждый раз при открытии консоли требуется активировать виртуальное окружение этой командой:
.venv/Scripts/activate

Без виртуального окружения софт не видит библиотеки, если виртуальное окружение активировано, то можно запускать софт.

Количество одновременно работающих акков/браузеров можно поставить в файле settings.py
Добавлены логгирование успешно отработанных аккаунтов и с ошибками.
---------------------------------------------------------------