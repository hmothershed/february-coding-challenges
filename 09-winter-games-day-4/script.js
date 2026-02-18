// TIME: O(n log n)
// SPACE: O(n)
function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
	// other jumper scores
	const otherScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];
	
	const yourScore = distancePoints + stylePoints + windComp + kPointBonus;
	
	// add yourScore to list and sort
	const scores = [...otherScores, yourScore];
	scores.sort((a,b) => b - a);
	
	// find your rank
	const rank = scores.indexOf(yourScore);
	// did we get a medal or nah??
	if (rank === 0) return "Gold";
	if (rank === 1) return "Silver";
	if (rank === 2) return "Bronze";

	return "No Medal";
}
