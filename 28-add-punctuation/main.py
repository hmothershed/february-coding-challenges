# TIME: O(n)
# SPACE: O(n)
def add_punctuation(sentences):
    result = ""

    for i in range(len(sentences)):
        current_char = sentences[i]
        next_char = sentences[i + 1] if i + 1 < len(sentences) else None

        # check: space followed by uppercase letter
        if (
            current_char == " " and
            next_char is not None and
            next_char.isupper()
        ):
            # add a period BEFORE the space
            result += "."

        # always add current character
        result += current_char

    # add a period at the end if not already there
    if not result.endswith("."):
        result += "."

    return result
