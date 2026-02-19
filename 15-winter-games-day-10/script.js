// TIME: O(1)
// SPACE: O(1)
function getHillRating(drop, distance, type) {
  let steepness = drop / distance;
  let adjusted = steepness;
  
  if (type === "Downhill") {
    adjusted *= 1.2;
  }
  else if (type === "Slalom") {
    adjusted *= 0.9;
  }
  // "Giant Slalom has no change since multiplier is 1.0"

  if (adjusted <= 0.1) {
    return "Green";
  }
  else if (adjusted <= 0.25) {
    return "Blue";
  }
  else {
    return "Black";
  }
}
