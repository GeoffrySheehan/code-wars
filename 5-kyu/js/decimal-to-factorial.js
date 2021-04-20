// Decimal to Factorial and Back
// https://www.codewars.com/kata/54e320dcebe1e583250008fd
function dec2FactString(nb) {
  let output = [0]
  let i = 2
  while (nb > 0) {
    output.push((nb % i).toString(16).toUpperCase())
    nb = Math.floor(nb / i++)
  }
  return output.reverse().join('');
}
function factString2Dec(str) {
  let radix = 1
  let output = 0
  let factorial = radix
  for(let c of str.split('').slice(0, -1).reverse()) {
    output += (parseInt(c, 16) * factorial)
    factorial *= ++radix
  }
  return output
}
