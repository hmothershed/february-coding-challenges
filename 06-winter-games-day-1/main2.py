# Method 2: The Unicode Trick
# TIME COMPLEXITY O(1)
# SPACE COMPLEXITY O(1)
def get_flag(code):
    return ''.join(
        chr(127397 + ord(char))
        for char in code.upper()
    )
