// Smallest Permutation
// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875
function minPermutation(n) {
  let num = n.toString().split('').sort();
  let sign = num[0] === '-' ? num.shift() : null;
  
  // Can't have leading zero in smallest permutation
  if (num[0] === '0') {
    let count = 1;
    while(num[count] === '0') count++;
    [num[0], num[count]] = [num[count], num[0]];
  }
  
  // if sign was included, then push it back onto the number
  if (sign) num.unshift(sign);
  
  // Ensure the value is an integer
  return parseInt(num.join(''));
}