// Math Issues
// https://www.codewars.com/kata/5267faf57526ea542e0007fb
Math.round = function(number) {
  let decimal = (number % 1) * 10
  return Math.floor(number) + (decimal >= 5)
};

Math.ceil = function(number) {
  let decimal = (number % 1) * 10
  return Math.floor(number) + (decimal > 0)
};

Math.floor = function(number) {
  return number | 0
};
