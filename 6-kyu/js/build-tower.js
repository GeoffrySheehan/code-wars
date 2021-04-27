// Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

/**
* This function builds a tower of * characters.
* Examples:
*   1 -> ["*"]
*   2 -> [" * ","***"]
*   3 -> ["  *  "," *** ","*****"]
* @param {number} nFloors - the number of layers the tower should contain
* @returns {Array.<string>} An array of strings, each string represents a layer in the tower.
*/

function towerBuilder(nFloors) {
  const length = 2 * nFloors - 1;  // Calculate the length of each string
  const tower = [];
  
  // Generate the array of strings
  for (let i = 1; i <= nFloors; i++) {
    const stars = 2 * i - 1;
    const spaces = nFloors - i;
    
    tower.push('*'.repeat(stars).padStart(spaces + stars, ' ').padEnd(length, ' '));
  }
  
  return tower;  
}
