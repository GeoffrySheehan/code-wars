// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0
/**
 * Move all elements of type Number value 0 to the end of the input array
 * Examples:
 *  [false,1,0,1,2,0,1,3,"a"] -> [false,1,1,2,1,3,"a",0,0]
 * @param {Array} arr - Array of any type of element to be sorted
 * @return {Array} Array of any type of element that has all 0 elements moved to the end.
 *  Keeps the order of all other elements.
 */
var moveZeros = function (arr) {
  // Create a new array by filtering zeros from the input array
  // Concatenate the difference of length number of zeros onto the filtered array.
  let noZeros = arr.filter(x => x !== 0);
  return noZeros.concat(new Array(arr.length - noZeros.length).fill(0));
}
