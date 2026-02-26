// TIME: O(n) -> loops through the string once
// SPACE: O(1) -> only counters
function countLettersAndNumbers(str) {
  let letters = 0;
  let numbers = 0;

  for (let char of str) {
    // check if the character is a letter
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      letters++;
    }
    // check if the character is a number
    else if (char >= '0' && char <= '9') {
      numbers++;
    }
  }

  // handle singular vs plural
  const letterWord = letters === 1 ? "letter" : "letters";
  const numberWord = numbers === 1 ? "number" : "numbers";

  return `The string has ${letters} ${letterWord} and ${numbers} ${numberWord}.`;
}
