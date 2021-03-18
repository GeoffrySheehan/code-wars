// Spoonerize Me
// https://www.codewars.com/kata/56b8903933dbe5831e000c76
function spoonerize(words) {
  return words.replace(/(.)(.*) (.)(.*)/, '$3$2 $1$4')
}
