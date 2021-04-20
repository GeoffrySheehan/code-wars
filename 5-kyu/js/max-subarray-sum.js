// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
// Kadane's algorithm

var maxSequence = function(arr) {
  let max_sum = 0
  let current_sum = 0
  arr.forEach(function(elem) {
    current_sum += elem
    if (max_sum < current_sum) max_sum = current_sum
    if (current_sum < 0) current_sum = 0    
  })
  return max_sum
}
