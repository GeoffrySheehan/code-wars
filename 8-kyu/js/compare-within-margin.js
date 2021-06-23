// Compare within margin
// https://www.codewars.com/kata/56453a12fcee9a6c4700009c
function closeCompare(a, b, margin){
  margin = margin || 0;
  const range = {lower: a - margin, upper: a + margin}
  
  if (b < range.lower) return +1;
  if (b > range.upper) return -1;
  return 0;
}
