# TIME COMPLEXITY O(n)
# SPACE COMPLEXITY O(n)
def truncate_text(text):
	if len(text) <= 20:
		return text
	else:
	# use slicing then append
		return text[:17] + "..."
