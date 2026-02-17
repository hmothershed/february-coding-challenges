# TIME: O(1)
# SPACE: O(1)
def get_landing_stance(start_stance, rotation):
    flips = abs(rotation) // 180

    if flips % 2 == 1:
        return "Goofy" if start_stance == "Regular" else "Regular"

    return start_stance
