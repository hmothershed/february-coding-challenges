// TIME: O(1)
// SPACE: O(1)
function getLandingStance(startStance, rotation) {
  // Count full 180-degree rotations
  let flips = Math.floor(Math.abs(rotation) / 180);

  // If odd, flip stance
  if (flips % 2 === 1) {
    return startStance === "Regular" ? "Goofy" : "Regular";
  }

  return startStance;
}
