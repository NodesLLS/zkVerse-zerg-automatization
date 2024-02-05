import re

from bip_utils import Bip39SeedGenerator, Bip44, Bip44Coins, Bip44Changes
from data.config import SEEDS
from utils.validate_seed import validate_seed_phrase


def get_accounts_info(path):
    with open(path, 'r', encoding='utf-8-sig') as file:
        if path == SEEDS:
            info: list[str] = [validate_seed_phrase(input_string=row) for row in file]
        else:
            info: list[str] = [row.strip() for row in file]
    return info


def from_mnemonic_to_address(mnemonic):
    seed_bytes = Bip39SeedGenerator(mnemonic).Generate("")

    bip44_mst_ctx = Bip44.FromSeed(seed_bytes, Bip44Coins.SOLANA)

    bip44_acc_ctx = bip44_mst_ctx.Purpose().Coin().Account(0)

    bip44_chg_ctx = bip44_acc_ctx.Change(Bip44Changes.CHAIN_EXT)

    return bip44_chg_ctx.PublicKey().ToAddress()


def formatted_address(address):
    return re.sub(r'^(.{3}).*(.{3})$', r'\1**\2', address)

