// MergeSort "merge" function
// https://www.codewars.com/kata/52336a4436e0b095d8000093/train/javascript
function mergesorted(a, b) {
  let merged = []
  let i = 0;
  let j = 0;
  
  // Loop until one of the index counters gets to the end of its respective array
  while(i < a.length && j < b.length) {
    // Push the lesser value onto the merged array and increment it's array index counter
    if (a[i] <= b[j]) {
      merged.push(a[i++]);
    }
    else {
      merged.push(b[j++]);
    }
  }
  
  // When one of the arrays has been fully added, then add the remainder of the opposite array.
  return merged.concat((i === a.length) ? b.slice(j) : a.slice(i));
}
