// Errors: histogram
// https://www.codewars.com/kata/59f44c7bd4b36946fd000052

/**
* This function generates a histogram string to display the number of errors that occurred in the print string.
* The characters 'u', 'w', 'x', and 'z' are considered errors in the string.
* Examples:
*   'uuaaaxbbbbyyhwawiwjjjwwxym' -> 
*      u  2     **
*      w  5     *****
*      x  2     **
*  'aaabbbbhaijjjm' -> '', no errors
* @param {string} s - the print string which may or may not contain errors
* @returns {string} a formatted string that builds the histogram of errors
*/

function hist(s) {
  const errorCodes = 'uwxz';
  
  const errors = s.split('')
    .filter(c => 'uwxz'.includes(c))
    .reduce((obj, c) => {
      (c in obj) ? obj[c]++ : obj[c] = 1;
      return obj;
    }, {})
  
  let histogram = [];
  for (const c of errorCodes) {
    if (c in errors) {
      const count = errors[c];
      histogram.push(`${c}${count.toString().padStart(3, ' ')}${' '.repeat(5)}${'*'.repeat(count)}`);
    }
  }
  
  return histogram.join('\r');
  
}
