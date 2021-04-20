// Simple letter removal
// https://www.codewars.com/kata/5b728f801db5cec7320000c7
function solve(s, k){
  if (s.length <= k) return ''
  
  let output = s
  let chars = Array.from(new Set(s)).sort()
  
  let c = chars.shift()

  let i = k
  while(i > 0) {
    if (output.includes(c)) {
      output = output.replace(c, '')
      i--
    }
    else {
      c = chars.shift()
    }
  }
  return output
}
