// Double Trouble
// https://www.codewars.com/kata/57f7796697d62fc93d0001b8
function trouble(x, t) {
  for (let i = 1; i < x.length; ) {
    if (x[i] + x[i-1] === t) {
      x.splice(i, 1)
    }
    else {
      i++
    }
  }
  return x
}
