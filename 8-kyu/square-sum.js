// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers){
  return numbers.reduce((sum, x) => sum += x ** 2, 0)
}
