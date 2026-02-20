# TIME: O(1)
# SPACE: O(1)
def is_valid_trick(trick_name):
    first_words = {
        "Misty", "Ghost", "Thunder", "Solar",
        "Sky", "Phantom", "Frozen", "Polar"
    }

    second_words = {
        "Twister", "Icequake", "Avalanche", "Vortex",
        "Snowstorm", "Frostbite", "Blizzard", "Shadow"
    }

    first, second = trick_name.split(" ")

    return first in first_words and second in second_words
