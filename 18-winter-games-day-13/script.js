// TIME: O(n)
// SPACE: O(n)
function calculateStartDelays (jumpScores) {
	const bestScore = Math.max(...jumpScores);
	const delays = jumpScores.map(i => {
			const diff = bestScore - i;
			const delay = diff * 1.5;
			
			// round up
			return Math.ceil(delay);
		});
	return delays;
}
