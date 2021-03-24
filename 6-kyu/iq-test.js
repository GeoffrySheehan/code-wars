// IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d
function iqTest(numbers){
  const even = 0
  const odd = 1
  
  let list_nums = numbers.split(' ')
  let firsts = [{count:0, first:undefined}, {count:0, first:undefined}]
  
  for (let i = 0; i < list_nums.length; i++) {
    let num_data = firsts[list_nums[i] % 2]
    num_data.count++
    if (num_data.first === undefined) {
      num_data.first = i+1
    }
  }
  
  if (firsts[even].count === 1) {
    return firsts[even].first
  }
  return firsts[odd].first
}
