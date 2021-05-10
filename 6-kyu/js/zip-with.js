// zipWith
// https://www.codewars.com/kata/5825792ada030e9601000782
function zipWith(fn,a0,a1) {
  const length = a0.length <= a1.length ? a0.length : a1.length;
  const results = [];
  
  for (let i = 0; i < length; i++) {
    const first = a0[i];
    const second = a1[i];
    
    results.push(fn(first, second));
  }
  
  return results;
}
