// Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
function findEvenIndex(arr)
{
  // Initialize sums
  let left = 0
  let right = arr.slice(1).reduce((x, y) => x + y, 0)
  
  let i = 0
  while (i < arr.length) {
    // If left and right are equivilent then we found our answer
    if (left === right) return i
    // Otherwise, add current arr[i] to left and subtract arr[i-1] from the right
    left += arr[i++]
    right -= arr[i]
  }
  // If we get to the end of the array, then its not possible, return -1
  return -1
}
