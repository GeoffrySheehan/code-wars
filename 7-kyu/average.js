// Averages of numbers
// https://www.codewars.com/kata/57d2807295497e652b000139
function averages(numbers) {
  if (numbers === null || numbers.length < 2) return []
  let results = []
  for(let i = 0; i < numbers.length - 1; i++) {
    results.push((numbers[i] + numbers[i+1]) / 2)
  }
  
  return results;
}
