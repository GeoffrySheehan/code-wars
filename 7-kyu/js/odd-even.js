// Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
  return array.reduce((acc, val) => acc + val, 0) % 2 ? 'odd' : 'even';
}
