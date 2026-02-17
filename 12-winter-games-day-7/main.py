# TIME: O(n)
# SPACE: O(1)
def largest_difference(skater1, skater2):

    max_diff = float('-inf')
    lap_number = 0

    for i in range(len(skater1)):
        diff = abs(skater1[i] - skater2[i])

        if diff > max_diff:
            max_diff = diff
            lap_number = i + 1  # convert to 1-based lap number

    return lap_number
    
# ALTERNATIVE CLEANER VERSION
def largest_difference(skater1, skater2):
    max_diff = float('-inf')
    lap_number = 1

    for i, (a, b) in enumerate(zip(skater1, skater2)):
        diff = abs(a - b)

        if diff > max_diff:
            max_diff = diff
            lap_number = i + 1

    return lap_number
