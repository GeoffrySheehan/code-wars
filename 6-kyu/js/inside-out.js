// Inside Out Strings
// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

/**
 * Encode a string by turning words in the string inside out
 * Example:
 *  taxi -> atix
 *  taxis -> atxsi
 * @param {string} x - string to encode
 * @return {string} encoded string
 */
function insideOut(x){
  // Split the string into an array of words
  return x.split(' ').map(word => {
    const chars = word.split('');    // convert each word to an array of characters
    const mod = chars.length % 2;    // find the halfway point of a word
    const half = ~~(chars.length / 2);
    
    const firstHalf = chars.slice(0, half).reverse();      // split the string in half and reverse the halves
    const secondHalf = chars.slice(half + mod).reverse();
    const middle = mod ? [chars[half]] : [];               // If the string lenght is odd, then leave the middle alone
    
    return firstHalf.concat(middle, secondHalf).join('');  // join the arrays back togeter into a string
  }).join(' ');
  
}
