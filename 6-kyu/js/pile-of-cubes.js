// Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047
function findNb(m) {
  let i = 1
  for (; m > 0; i++) {
    m -= i ** 3
  }
  
  return m ? -1 : i - 1
}
