// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009
/**
 * Get the set of numbers from an array that don't exist in a separate array
 * Examples:
 *              [], [4, 5] -> []
 *          [3, 4],    [3] -> [4]
 *       [1, 8, 2],     [] -> [1, 8, 2]
 *       [1, 2, 3], [1, 2] -> [3]
 * [1, 2, 2, 2, 3],    [2] -> [1, 3]
 * @param {Array.<number>} a - An array of numbers
 * @param {Array.<number>} b - The numbers to remove from array a
 * @return {Array.<number>} The difference between array a and array b
 */
function arrayDiff(a, b) {
  // For each number in b, remove all instance of that number from a
  b.forEach(remove => a = a.filter(x => x !== remove));
  return a;
}
