// Zozonacci
// https://www.codewars.com/kata/5b7c80094a6aca207000004d

function zozonacci (pattern, length) {
  let sequence = [];
  if(!pattern.length || !length) return sequence;
  
  while (pattern.length < length) {
    pattern = pattern.concat(pattern);
  }
  // Cut the end off the pattern to meet the length requirement
  pattern = pattern.slice(0, length - 4);
  
  const map = {
    fib: {
      start: [0, 0, 0, 1],
      next: (arr) => arr[arr.length - 1] + arr[arr.length - 2]
    },
    jac: {
      start: [0, 0, 0, 1],
      next: (arr) => arr[arr.length - 1] + 2 * arr[arr.length - 2]
    },
    pad: {
      start: [0, 1, 0, 0],
      next: (arr) => arr[arr.length - 2] + arr[arr.length - 3]
    },
    pel: {
      start: [0, 0, 0, 1],
      next: (arr) => 2 * arr[arr.length - 1] + arr[arr.length - 2]
    },
    tet: {
      start: [0, 0, 0, 1],
      next: (arr) => arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3] + arr[arr.length - 4]
    },
    tri: {
      start: [0, 0, 0, 1],
      next: (arr) => arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
    },
 
  }
  
  const start = map[pattern[0]].start;
  sequence = sequence.concat(start);
  
  for(const pat of pattern) {
    const next = map[pat].next(sequence);
    sequence.push(next);
  }
  
  return sequence.slice(0, length);
}
