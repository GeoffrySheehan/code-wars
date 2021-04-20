// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  const float_century = year / 100
  let century = Math.trunc(float_century)
  return century + !(float_century === century)
}
