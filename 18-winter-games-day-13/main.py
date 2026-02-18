import math
# TIME: O(n)
# SPACE: O(n)
def calculate_start_delays (jump_scores):
	best_score = max(jump_scores)
	# using ceil because we're rounding up
	delays = [math.ceil((best_score - i) * 1.5) for i in jump_scores]
	
	return delays
