# TIME: O(1)
# SPACE: O(1)
def avalanche_risk(snow_depth, slope):
	if slope != "Gentle" and snow_depth != "Shallow":
		return "Risky"
	return "Safe"
