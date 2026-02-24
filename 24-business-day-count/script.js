// TIME: O(n)
// SPACE: O(1)
function countBusinessDays(start, end) {
	let count = 0;
	
	
	// parse start and end date local time
	const [sYear, sMonth, sDay] = start.split("-").map(Number);
	const [eYear, eMonth, eDay] = end.split("-").map(Number);
	
	// convert strings to date objects
	let current = new Date(sYear, sMonth - 1, sDay);
	let endDate = new Date(eYear, eMonth - 1, eDay);
	
	// loop from start to end
	while (current <= endDate){
		const day = current.getDay();
		// 0 = Sunday, 6 = Saturday
		
		// check if current day is weekday
		if (day !== 0 && day !== 6){
			count++;    // increment counter
		}
		
		// move to next day
		current.setDate(current.getDate() + 1);
	}
	return count;
}
