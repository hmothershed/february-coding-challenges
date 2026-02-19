// TIME: O(1)
// SPACE: O(1)
function avalancheRisk(snowDepth, slope) {
	if (slope !== "Gentle" && snowDepth != "Shallow"){
		return "Risky";
	}
	return "Safe";
}
