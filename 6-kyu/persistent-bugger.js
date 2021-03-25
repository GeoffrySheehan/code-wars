// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num) {
  if (num < 10) return 0
  let new_num = `${num}`.split('').reduce((a, x) => a *= x, 1)
  return 1 + persistence(new_num)
}
