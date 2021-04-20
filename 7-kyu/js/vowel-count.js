// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
  let vowelsCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    // .includes returns true (1) or false (0)
    vowelsCount += ['a', 'e', 'i', 'o', 'u'].includes(str[i])
  }
  
  return vowelsCount;
}
