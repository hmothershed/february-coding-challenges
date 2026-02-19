# TIME: O(1)
# SPACE: O(1)
def get_hill_rating(drop, distance, hill_type):
	steepness = drop / distance;
	adjusted = steepness;
	
	if hill_type == "Downhill":
		adjusted *= 1.2
	elif hill_type == "Slalom":
		adjusted *= 0.9
	# "Giant Slalom" has no change since multiplier is 1.0
		
	if adjusted <= 0.1:
		return "Green"
	elif adjusted <= 0.25:
		return "Blue"
	else:
		return "Black"
