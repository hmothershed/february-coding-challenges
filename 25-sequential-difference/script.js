// TIME: O(n)
// SPACE: O(n)
function findDifferences(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++){
		// last element automatically push 0
		if (i === arr.length - 1){
			result.push(0);
		}
		else {
			result.push(arr[i+1] - arr[i]);
		}
	}
	return result;
}
