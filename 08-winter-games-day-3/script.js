// TIME: O(n)
// SPACE: O(1)
function calculatePenaltyDistance(rounds) {
	return rounds.reduce((total, hits) => {
		return total + (5 - hits) * 150;
	}, 0);
}

// LOOP VERSION
function calculatePenaltyDistance(rounds){
	let totalPenalty = 0;
	for (let i = 0; i < rounds.length; i++){
		let misses = 5 - rounds[1];
		totalPenalty += misses * 150;
	}
	return totalPenalty;
}
