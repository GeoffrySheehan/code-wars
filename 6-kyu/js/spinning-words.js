// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(sentence){
  return sentence.split(' ')  // break the sentence into words
    .map(word => word.length < 5
         ? word
         : word.split('').reverse().join('') // reverse words of length 5+
        )
    .join(' ')
}
