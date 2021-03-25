// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string){
  // Normalize the string by:
  //  1. converting string to lower case
  //  2. removing any characters that are not a-z
  // Convert normalized string to a set, to remove duplicate letters
  // If the size of the set of normalized characters is 26, then every letter is represented
  return (new Set(string.toLowerCase().replace(/[^a-z]/g, ''))).size === 26
}
