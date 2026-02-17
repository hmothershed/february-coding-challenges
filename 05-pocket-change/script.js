// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(1)
function countChange(change) {
  // Step 1: Add all cents
  let totalCents = change.reduce((sum, coin) => sum + coin, 0);

  // Step 2: Convert to dollars and format
  // toFixed(2) is used to round properly and ensure exactly 2 decimal places
  let dollars = (totalCents / 100).toFixed(2);

  // Step 3: Return with dollar sign
  return "$" + dollars;
}

// ALTERNATIVE APPROACH
function countChange(change) {
  let total = change.reduce((sum, coin) => sum + coin, 0);

  let dollars = Math.floor(total / 100);
  let cents = total % 100;

  return "$" + dollars + "." + cents.toString().padStart(2, "0");
}
