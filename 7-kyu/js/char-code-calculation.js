// Char Code Calculation
// https://www.codewars.com/kata/57f75cc397d62fc93d000059
let reducer = (sum, value) => sum = Number(sum) + Number(value)

function calc(x){
  let total1 = ''
  for(let i in x) {
    total1 += x.charCodeAt(i)
  }
  let total2 = total1.replace(/7/g, '1')
  return total1.split('').reduce(reducer) - total2.split('').reduce(reducer)
}
