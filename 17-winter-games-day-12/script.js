// TIME: O(n)
// SPACE: O(1)
function checkEligibility(athleteWeights, sledWeight) {

  const teamSize = athleteWeights.length;

  // Lookup table for weight rules
  const rules = {
    1: { minSled: 162, maxTotal: 247 },
    2: { minSled: 170, maxTotal: 390 },
    4: { minSled: 210, maxTotal: 630 }
  };

  // If team size is invalid
  if (!rules[teamSize]) {
    return "Not Eligible";
  }

  const { minSled, maxTotal } = rules[teamSize];

  // Check minimum sled weight
  if (sledWeight < minSled) {
    return "Not Eligible";
  }

  // Calculate total weight
  const totalWeight = athleteWeights.reduce((sum, w) => sum + w, 0) + sledWeight;

  // Check maximum total weight
  if (totalWeight > maxTotal) {
    return "Not Eligible";
  }

  return "Eligible";
}
