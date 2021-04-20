// Hells Kitchen
// https://www.codewars.com/kata/57d1f36705c186d018000813
function gordon(a) {
  return a.toUpperCase() // capitalize words
    .split(' ')          // separate words into array
    .map(word =>
         word.split('')  // separate each word into an array of chars
         .map(c => {     // convert vowels
        switch(c) {
          case 'A': return '@'
          case 'E': case 'I': case 'O': case 'U': return '*'
          default: return c    // consonants stay the same
      }
    }).join('') + '!!!!'      // join characters back into words and append the !!!!
  ).join(' ')  // join words back into sentences
}
