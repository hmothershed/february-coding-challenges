// TIME: O(1)
// SPACE: O(1)
function isValidTrick(trickName) {
  const firstWords = new Set([
    "Misty", "Ghost", "Thunder", "Solar",
    "Sky", "Phantom", "Frozen", "Polar"
  ]);

  const secondWords = new Set([
    "Twister", "Icequake", "Avalanche", "Vortex",
    "Snowstorm", "Frostbite", "Blizzard", "Shadow"
  ]);

  const [first, second] = trickName.split(" ");

  return firstWords.has(first) && secondWords.has(second);
}
