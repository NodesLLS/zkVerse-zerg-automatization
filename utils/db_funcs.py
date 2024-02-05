import json
from data.config import VALID_DB, ERRORS_DB


def save_error_to_file(data):
    # Записываем обновленные данные в файл
    with open(ERRORS_DB, 'a', encoding='utf-8') as error_file:
        error_file.write(f'{data}\n')


def save_success_to_file(data):
    # Записываем обновленные данные в файл
    with open(VALID_DB, 'a', encoding='utf-8') as success_file:
        success_file.write(f'{data}\n')