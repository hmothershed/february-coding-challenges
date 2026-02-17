// TIME: O(n)
// SPACE: O(n)
function getRelativeResults(results) {
  
  // Helper: convert H:MM:SS → total seconds
  function toSeconds(time) {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  }

  const winnerTime = toSeconds(results[0]);

  return results.map((time, index) => {
    if (index === 0) return "0";

    const currentTime = toSeconds(time);
    const diff = currentTime - winnerTime;

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    return `+${minutes}:${seconds.toString().padStart(2, "0")}`;
  });
}
