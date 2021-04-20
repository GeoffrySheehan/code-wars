// Simple Fun #136: Missing Values
// https://www.codewars.com/kata/58a66c208b88b2de660000c3
function count(arr, val) {
  return arr.filter( (x) => x === val).length
}

function missingValues(arr) {
  let distinct = new Set(arr);
  let x, y;
  
  for (let i of distinct) {
    if (count(arr, i) === 1) {
      x = i;
    }
    else if (count(arr, i) === 2) {
      y = i;
    }
  }
  
  return x * x * y;
}
