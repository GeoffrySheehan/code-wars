/**
* This function counts the number of characters that appear more than once in the given string
* Examples:
*  '' -> 0, no chars to be duplicated
*  'abcde' -> 0, all chars appear once
*  'aabbcd' -> 2, a and b
*  'aabBcde' -> 2, a and b, case doesn't matter
*  'Indivisibility' -> 1, i appears 6 times
*  'Indivisibilities' -> 2, i and s, 7 times and 2 times respectively
* @param {string} text - the text to check for duplicate characters
* @returns {number} the number of characters that appear more than once in text
*/

function duplicateCount(text) {
  let duplicates = 0;
  const charCount = text
    .toLowerCase()  // convert text to same case
    .split('')      // split the text into a string of characters
    // count each character
    .reduce((obj, c) => {
      (c in obj) ? obj[c]++ : obj[c] = 1;
      return obj;
    }, {});
  
  // count the number of characters that appear more than once.
  for (const c in charCount) {
    if (charCount[c] > 1) duplicates++;
  }
  
  return duplicates;
}
