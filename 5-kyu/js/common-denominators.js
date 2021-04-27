// Common Denominators
// https://www.codewars.com/kata/54d7660d2daf68c619000d95
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

/**
 * Finds the lowest common denominator of an array of fractions and coverts the fractions to use this lcd.
 * Examples:
 *  [] -> ''
 *  [ [1, 2], [2, 3], [3, 4] ] -> '(6,12)(8,12)(9,12)'
 * @param {Array.<Array<Number>>} lst - Array of fractions
 */
function convertFrac(lst) {
  if(!lst.length) return '';
  
  // Find the lowest common denominator
  let common_denom = lcm(lst[0][1], lst[1][1]);
  for (let i = 2; i < lst.length; i++) {
    common_denom = lcm(common_denom, lst[i][1]);
  }
  // Convert fractions to use the lowest common denominator
  return lst.map( ([num, denom]) => `(${num * (common_denom / denom)},${common_denom})` ).join('');
}
