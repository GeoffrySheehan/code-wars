// Life Path Number
// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0
/* Recursively sum digits of given number until there is only 1 digit */
function sumDigits(num) {
  let val = num.toString()
  if (val.length === 1) return num
  // else
  return sumDigits(val.split('').map(c => Number(c)).reduce((sum, x) => sum += x ))
}

function lifePathNumber(dateOfBirth) {
  return sumDigits(dateOfBirth.split('-').map(x => sumDigits(x)).reduce((sum, x) => sum+= x))
}
