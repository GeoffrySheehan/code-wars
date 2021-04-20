// Move 10
// https://www.codewars.com/kata/57cf50a7eca2603de0000090
function moveTen(s) {
  let [a, z] = ['a'.charCodeAt(), 'z'.charCodeAt() + 1]
  let out = ''
  for (let c of s) {
    let encoded = (c.charCodeAt() + 10) % z
    encoded = encoded + (encoded < a ? a : 0)
    out += String.fromCharCode(encoded)
  }
  return out
}
