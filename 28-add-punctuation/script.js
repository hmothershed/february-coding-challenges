// TIME: O(n)
// SPACE: O(n)
function addPunctuation(sentences) {
  let result = "";

  for (let i = 0; i < sentences.length; i++) {
    let currentChar = sentences[i];
    let nextChar = sentences[i + 1];

    // check: space followed by uppercase letter
    if (
      currentChar === " " &&
      nextChar &&
      nextChar >= "A" &&
      nextChar <= "Z"
    ) {
      // add a period BEFORE the space
      result += ".";
    }

    // always add the current character
    result += currentChar;
  }

  // add a period at the end if not already there
  if (result[result.length - 1] !== ".") {
    result += ".";
  }

  return result;
}
