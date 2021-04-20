// Playing with passphrases
// https://www.codewars.com/kata/559536379512a64472000053
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function playPass(s, n) {
  let chars = s.split('')  // convert string to array
  .map(function (c, i) {
    let odd = i % 2
    let index = alphabet.indexOf(c)
    
    // if element is a character, rotate it
    if (index >= 0) {
      let new_char = alphabet[(index + n) % alphabet.length]
      // odd positioned characters are converted to lower case
      return odd ? new_char.toLowerCase() : new_char
    }
    
    // if element is a number, provide the complement
    let number = parseInt(c)
    if (!isNaN(number)) {
      return (9 - number).toString()
    }
    
    // else, return the character as is
    return c
  })
  
  // reverse the array and return it joined as a string
  return chars.reverse().join('')
}
