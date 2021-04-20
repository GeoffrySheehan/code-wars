// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db
function tribonacci(signature,n){
  if (n === 0) return []
  if (n === 1) return signature.slice(0, 1)
  if (n === 2) return signature.slice(0, 2)
  if (n === 3) return signature

  let result = signature.map((x) => x);

  for (let i = 0; i < n - 3; i++) {
    let next = result.slice(i, i+3).reduce((x, y) => x + y)
    result.push(next)
  }
  return result
}
