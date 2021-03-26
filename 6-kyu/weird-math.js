// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// https://www.codewars.com/kata/5626b561280a42ecc50000d1
// recursive function to break a number into an array by its digits
function split(num) {
  if (num < 10) return [num]
  let output = [num % 10]
  return split(Math.floor(num / 10)).concat(output)
}

function sumDigPow(a, b) {
  let output = []
  for (let i = a; i <= b; i++) {
    let i_split = split(i)
    let pow = 1
    let sum = 0
    for (let digit of i_split) {
      sum += (digit ** pow++)
    }
    if (sum === i) {
      output.push(i)
    }
  }
  return output
}
