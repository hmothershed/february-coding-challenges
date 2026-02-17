# TIME: O(n)
# SPACE: O(1)
def check_eligibility(athlete_weights, sled_weight):

    team_size = len(athlete_weights)

    # Lookup table for rules
    rules = {
        1: {"min_sled": 162, "max_total": 247},
        2: {"min_sled": 170, "max_total": 390},
        4: {"min_sled": 210, "max_total": 630}
    }

    # Invalid team size
    if team_size not in rules:
        return "Not Eligible"

    min_sled = rules[team_size]["min_sled"]
    max_total = rules[team_size]["max_total"]

    # Check sled minimum
    if sled_weight < min_sled:
        return "Not Eligible"

    # Calculate total weight
    total_weight = sum(athlete_weights) + sled_weight

    # Check total weight limit
    if total_weight > max_total:
        return "Not Eligible"

    return "Eligible"
