// TIME: O(n)
// SPACE: O(1)
function getFastestSpeed(times) {
	const distances = [320, 280, 350, 300, 250];
	let maxSpeed = -Infinity;
	let fastest = 0;
	
	for (let i = 0; i < times.length; i++){
		// calculate speed m/s
		const speed = distances[i] / times[i];
		// update max if faster
		if (speed > maxSpeed) {
			maxSpeed = speed;
			fastest = i + 1; // 0-based to 1-based for the segment number
		}
	}
	// round 2 decimal places
	const rounded = maxSpeed.toFixed(2);
	
  return `The luger's fastest speed was ${rounded} m/s on segment ${fastest}.`;
}
