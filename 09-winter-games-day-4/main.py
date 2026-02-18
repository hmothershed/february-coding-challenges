# TIME: O(n log n)
# SPACE: O(n)
def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):

    your_score = distance_points + style_points + wind_comp + k_point_bonus

    # other jumper scores
    other_scores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0]

    # Add your score to list and sort in descending order
    scores = other_scores + [your_score]
    scores.sort(reverse=True)

    # find your rank
    rank = scores.index(your_score)
    # did we get a medal or nah??
    if rank == 0:
        return "Gold"
    elif rank == 1:
        return "Silver"
    elif rank == 2:
        return "Bronze"
    else:
        return "No Medal"
