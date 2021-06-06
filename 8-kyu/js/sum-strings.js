// Sum The Strings
// https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(a,b) {
  return [a,b].reduce((sum, v) => sum + (parseInt(v) || 0), 0).toString();
}