// Formatting a number as price
// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

function numberToPrice(number) {
  // Test input for number
  if (!/^-?\d+(\.\d+)?$/.test(number.toString())) return 'NaN';
  
  // Truncate decimal to 2 places
  // Add up to 2 decimal places if needed
  number = Number(number.toString().match(/-?\d*(\.\d{0,2})?/)[0]).toFixed(2);
  
  if (0 < number && number < 1000) return number;

  const negative = number < 0;
  
  number = Math.abs(Number(number)).toFixed(2);
  let [num, decimal] = number.split('.');
  
  const numLeftover = num.length % 3;
  let leftovers = num.slice(0, numLeftover);

  let groups = number.slice(numLeftover).match(/\d{3}/g) || [];
  if (leftovers.length > 0)
    groups.unshift(leftovers);
  number = groups.join(',') + `.${decimal}`;
  if (negative) {
    number = '-' + number;
  }
  return number
}
