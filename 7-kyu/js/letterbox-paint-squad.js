// Letterbox Paint-Squad
// https://www.codewars.com/kata/597d75744f4190857a00008d
var paintLetterboxes = function(start, end) {
  let nums = ''
  let output = new Array(10).fill(0) // Create array of 10 0s

  // concatenate all numbers from start to end into one string
  for (let i = start; i <= end; i++) { nums += i}
  // convert string to array of characters
  nums = nums.split('')
  // filter nums array with one number, then count and store the results
  for (let i in output) {
    output[i] = nums.filter(value => value == i).length
  }
  return output
}
