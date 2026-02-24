# TIME: O(n)
# SPACE: O(1)
from datetime import datetime, timedelta
def count_business_days(start, end):
	count = 0
	
	# convert string to date objects
	current = datetime.strptime(start, "%Y-%m-%d")
	end_date = datetime.strptime(end, "%Y-%m-%d")
	
	# loop from start to end
	while current <= end_date:
		# weekday(): Monday = 0, Sunday = 6
		if current.weekday() < 5:
			count += 1
			
		# move to next day
		current += timedelta(days=1)
	
	return count
