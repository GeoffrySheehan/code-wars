// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
  if (words.length === 0) return words
  
  let result = words.split(' ')
  for(let word of words.split(' ')) {
    let index = Number(word.match(/\d+/g)[0]) - 1
    result[index] = word
  }
  return result.join(' ')
}
