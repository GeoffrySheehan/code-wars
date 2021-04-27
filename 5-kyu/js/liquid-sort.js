// Don't Drink the Water
// https://www.codewars.com/kata/562e6df5cf2d3908ad00019e
/**
 * Returns a container of liquids separated by density
 * Examples:
 *  [                          [
 *    ['H', 'H', 'W', 'O'],      ['O', 'O', 'O', 'O'],
 *    ['W', 'W', 'O', 'W'],  =>  ['W', 'W', 'W', 'W'],
 *    ['H', 'H', 'O', 'O'],      ['H', 'H', 'H', 'H'],
 *  ]                          ]
 *
 *  [                          [
 *    ['H', 'H', 'W', 'O'],      ['O', 'O', 'O', 'W'],
 *    ['W', 'W', 'O', 'W'],  =>  ['W', 'W', 'W', 'H'],
 *    ['H', 'H', 'O', 'H'],      ['H', 'H', 'H', 'H'],
 *  ]                          ]
 *
 * @param {Array.<Array.<string>>} glass - Multidimensional array of random liquid particles
 * @return {Array.<Array.<string>>} Multidimensional array of sorted liquid particles
 */
function separateLiquids(glass) {
  if (glass.length === 0) return glass;
  const densityChart = {
    H: 1.36,
    W: 1.00,
    A: 0.87,
    O: 0.80
  };
  
  // Get the width of the glass for later
  const width = glass[0].length;
   
  return glass
    .reduce((arr, layer) => arr.concat(layer), [])      // Go to single dimensional array
    .sort((a, b) => densityChart[a] - densityChart[b])  // Sort array of particles
    .reduce((arr, particle, index) => {                 // Convert back to multi-dimensional array with width of the glass
      index % width === 0
        ? arr.push([particle])
        : arr[arr.length - 1].push(particle);
      return arr;
    }, []);
}
