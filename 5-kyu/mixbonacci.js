// Mixbonacci
// https://www.codewars.com/kata/5811aef3acdf4dab5e000251

// General generator function
function* sequence(start, next) {
  for(const x of start) {
    yield x;
  }
  
  while(true) {
    let curr = next(start);
    start.shift();
    start.push(curr);
    yield curr;
  }
}

function mixbonacci(pattern, length) {
  const output = [];
  if (pattern.length === 0 || length === 0) return output;
  
  // Custom generator sequences
  const map = {
    fib: sequence([0, 1], (arr) => arr.reduce((sum, x) => sum + x)),
    pad: sequence([1, 0, 0], (arr) => arr[0] + arr[1]),
    jac: sequence([0, 1], (arr) => 2 * arr[0] + arr[1]),
    pel: sequence([0, 1], (arr) => 2 * arr[1] + arr[0]),
    tri: sequence([0, 0, 1], (arr) => arr.reduce((sum, x) => sum + x)),
    tet: sequence([0, 0, 0, 1], (arr) => arr.reduce((sum, x) => sum + x))
  }
 
  // Double the size of the pattern until it is bigger than our length
  while (pattern.length < length) {
    pattern = pattern.concat(pattern);
  }
  // Cut the end off the pattern to meet the length requirement
  pattern = pattern.slice(0, length);
  
  for (const pat of pattern) {
    output.push( map[pat].next().value );
  }
  
  return output;  
}
