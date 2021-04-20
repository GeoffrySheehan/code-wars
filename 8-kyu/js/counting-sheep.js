// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
  let count = 0
  for(let sheep of arrayOfSheep) {
    count += sheep ? 1 : 0
  }
  return count
}
