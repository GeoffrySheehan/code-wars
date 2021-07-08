// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050
function digPow(n, p){
  let sumOfDigits = n.toString().split('')
    .reduce((sum, d, i) => sum + Math.pow(d, p + i), 0);

  if (sumOfDigits % n === 0) return sumOfDigits / n;
  return -1;
}
