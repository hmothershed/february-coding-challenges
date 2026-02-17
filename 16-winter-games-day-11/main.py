# TIME: O(n log n)
# SPACE: O(n)
def get_semifinal_matchups(teams):

    # List to store (team_name, points)
    standings = []

    # Loop through each team string
    for team in teams:

        # Split into team name and record
        # Example: "FIN: 2-2-1-0"
        name, record = team.split(": ")

        # Split record into W, OTW, OTL, L
        # Convert each to integer
        W, OTW, OTL, L = map(int, record.split("-"))

        # Calculate total points
        # W = 3 pts, OTW = 2 pts, OTL = 1 pt, L = 0 pts
        points = (W * 3) + (OTW * 2) + (OTL * 1)

        # Append tuple of (team_name, points)
        standings.append((name, points))

    # Sort by points in descending order
    # key=lambda x: x[1] sorts by the points value
    standings.sort(key=lambda x: x[1], reverse=True)

    # Extract top 4 teams
    first = standings[0][0]
    second = standings[1][0]
    third = standings[2][0]
    fourth = standings[3][0]

    # Return formatted string
    return f"The semi-final games will be {first} vs {fourth} and {second} vs {third}."
