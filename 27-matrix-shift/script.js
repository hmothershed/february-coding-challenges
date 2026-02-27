// TIME: O(n)
// SPACE: O(n)
function shiftMatrix(matrix, shift) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // flatten the array to one continuous 1d array
  const flat = matrix.flat();

  const n = flat.length;

  // normalize shift
  shift = shift % n;

  // Handle negative shifts
  if (shift < 0) {
    shift += n;
  }

  // rotate array (right shift)
  const rotated = flat.slice(-shift).concat(flat.slice(0, n - shift));

  // rebuild matrix
  const result = [];
  let index = 0;

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(rotated[index++]);
    }
    result.push(row);
  }

  return result;
}
