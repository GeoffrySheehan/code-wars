// Holiday II - Plane Seating
// https://www.codewars.com/kata/57e8f757085f7c7d6300009a
function planeSeat(a){
  let groups = a.match(/(\d+)([A-H,K])/)
  if (!groups || groups[1] > 60 ) {
    return 'No Seat!!'
  }
  
  let number = Number(groups[1])
  let letter = groups[2]
  
  let section = ['Front', 'Middle', 'Back'][~~((number - 1) / 20)]
  
  
  let aisle = ['Left', 'Middle', 'Right'][~~(((letter === 'K' ? 'I' : letter).charCodeAt() - 'A'.charCodeAt() ) / 3)]
  return `${section}-${aisle}`
}
