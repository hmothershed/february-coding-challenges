// TIME: O(n)
// SPACE: O(n)
function computeScore(judgeScores, ...penalties) {
	// copy array
	let scores = [...judgeScores];
	
	// remove lowest and highest
	let min = Math.min(...scores);
	scores.splice(scores.indexOf(min), 1);
	let max = Math.max(...scores);
	scores.splice(scores.indexOf(max), 1);
	
	// sum remaining 8 scores
	let baseScore = scores.reduce((sum, score) => sum + score, 0);
	
	// subtract penalties
	let totalPenalty = penalties.reduce((sum, p) => sum + p, 0);
	
  return baseScore - totalPenalty;
}

// CLEANER/MORE EFFICICENT VERSION (NO COPY, NO REMOVE)
// TIME: O(n)
// SPACE: O(1)
function computeScore(judgeScores, ...penalties){
	let total = judgeScores.reduce((sum, s) => sum + s, 0);
	let min = Math.min(...judgeScores);
	let max = Math.max(...judgeScores);
	let penaltyTotal = penalties.reduce((sum, p) => sum + p, 0);
	
	return total - min - max - penaltyTotal;
}
