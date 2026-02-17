# TIME: O(n)
# SPACE: O(1)
def calculate_penalty_distance(rounds):
	return sum((5 - hits) * 150 for hits in rounds)
	
# LOOP VERSION
def calculate_penalty_distance(rounds):
	total_penalty = 0
	for hits in rounds:
		misses = 5 - hits
		total_penalty += misses * 150
	return total_penalty
