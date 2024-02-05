import re


def validate_seed_phrase(input_string: str) -> str | None:
    seed_phrase = input_string.strip()
    # Разделение строки на слова
    words = re.findall(r'\b\w+\b', seed_phrase)

    if len(words) == 12 or len(words) == 24:
        return seed_phrase
    else:
        return None
