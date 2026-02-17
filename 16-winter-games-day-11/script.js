// TIME: O(n log n)
// SPACE: O(n)
function getSemifinalMatchups(teams){
	
	// store each team's name and total points
	let standings = [];

	// loop through each team string
	for (let team of teams) {
		// split into team name and record
		let [name, record] = team.split(": ");
		// split record into individual stats and convert them to numbers
		let [W, OTW, OTL, L] = record.split("-").map(Number);

		// calculate the total points
		let points = (W * 3) + (OTW * 2) + (OTL * 1);

		// store theam and points in standings array
		standings.push({ name, points });
	}

	// Sort descending by points
	standings.sort((a, b) => b.points - a.points);

	let first = standings[0].name;
	let second = standings[1].name;
	let third = standings[2].name;
	let fourth = standings[3].name;

	return `The semi-final games will be ${first} vs ${fourth} and ${second} vs ${third}.`;
}
