# TIME: O(n)
# SPACE: O(1)
def count_letters_and_numbers(s):
    letters = 0
    numbers = 0

    for char in s:
        # check if letter
        if char.isalpha():
            letters += 1
        # check if number
        elif char.isdigit():
            numbers += 1

    # handle singular vs plural
    letter_word = "letter" if letters == 1 else "letters"
    number_word = "number" if numbers == 1 else "numbers"

    return f"The string has {letters} {letter_word} and {numbers} {number_word}."
