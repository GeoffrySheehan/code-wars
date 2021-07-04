// Sum of the first nth term of Series
// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
  if (n === 0) return "0.00";
  if (n === 1) return "1.00";
  
  let sum = 1;
  for (let i = 1; i < n; i++) {
    sum += (1 / (1 + 3 * i));
  }
  
  return sum.toFixed(2);
}
