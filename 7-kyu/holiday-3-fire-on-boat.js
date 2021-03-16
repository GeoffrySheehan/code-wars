// Holiday III - Fire on the boat
// https://www.codewars.com/kata/57e8fba2f11c647abc000944
function fireFight(s) {
  // split the string at spaces into an array
  // map each string in the array to ~~ if it is 'Fire'
  // rejoin the array into a string with spaces between each element
  return s.split(' ').map(value => value.replace('Fire', '~~')).join(' ')
}
