// Sums of Parts
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/solutions/javascript
function partsSums(ls) {
  if (ls && ls.length === 0) return [0];
  
  let full_sum = ls.reduce((sum, val) => sum += val);
  return ls.reduce((arr, elem) => {
    full_sum -= elem;
    arr.push(full_sum);
    return arr;
  }, [full_sum])
}
