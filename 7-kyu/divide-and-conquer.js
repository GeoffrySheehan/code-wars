// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021
function divCon(x){
  let sum_num = 0
  let sum_str = 0
  x.forEach(elem => {
    (typeof elem === 'number') ? sum_num += elem : sum_str += Number(elem)
  })
  return sum_num - sum_str
  
}
