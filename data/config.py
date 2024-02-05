import os
import sys
from pathlib import Path

from loguru import logger

if getattr(sys, 'frozen', False):
    ROOT_DIR = Path(sys.executable).parent.absolute()
else:
    ROOT_DIR = Path(__file__).parent.parent.absolute()


STATUS_DIR = os.path.join(ROOT_DIR, 'status')
ACCOUNTS_DIR = os.path.join(ROOT_DIR, 'accounts')

SEEDS = os.path.join(ACCOUNTS_DIR, 'seeds.txt')
PROXIES = os.path.join(ACCOUNTS_DIR, 'proxies.txt')
LOG = os.path.join(STATUS_DIR, 'log.txt')
ERRORS_DB = os.path.join(STATUS_DIR, 'errors_accounts.txt')
VALID_DB = os.path.join(STATUS_DIR, 'success_accounts.txt')

PHANTOM_EXTENSION_PATH = './Extensions/bfnaelmomeimhlpmgjnjophhpkkoljpa/24.0.1_0'

logger.add(LOG, format='{time:YYYY-MM-DD HH:mm:ss} | {level} | {message}', level='DEBUG')