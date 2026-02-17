// Method 2: The Unicode Trick
// TIME COMPLEXITY O(1)
// SPACE COMPLEXITY O(1)
function getFlag(code) {
  return [...code.toUpperCase()]
    .map(char => String.fromCodePoint(127397 + char.charCodeAt()))
    .join('');
}
