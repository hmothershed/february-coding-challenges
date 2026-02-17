# TIME: O(n)
# SPACE: O(n)
def compute_score(judge_scores, *penalties):
	scores = judge_scores.copy()
	
	# remove one lowest and one highest
	scores.remove(min(scores))
	scores.remove(max(scores))
	
	return sum(scores) - sum(penalties)

# CLEANER/MORE EFFICICENT VERSION (NO COPY, NO REMOVE)
# TIME: O(n)
# SPACE: O(1)
def compute_score(judge_scores, *penalties):
	total = sum(judge_scores)
	min_score = min(judge_scores)
	max_score = max(judge_scores)
	
	return total - min_score - max_score - sum(penalties)
