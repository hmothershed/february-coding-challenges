// TIME: O(n) --> loop through the arrays once
// SPACE: O(1) --> only store two variables (maxDiff, lapNumber)
function largestDifference(skater1, skater2){
	let maxDiff = -Infinity;
	let lapNumber = 0;
	
	for (let i = 0; i < skater1.length; i++){
		let diff = Math.abs(skater1[i] - skater2[i]);
		
		if (diff > maxDiff){
			maxDiff = diff;
			lapNumber = i + 1; // convert to 1-based lap number
		}
	}
		
	return lapNumber;
}
