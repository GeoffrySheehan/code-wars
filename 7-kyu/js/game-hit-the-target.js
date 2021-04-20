// Game Hit the target
// https://www.codewars.com/kata/5ffc226ce1666a002bf023d2
const solution = mtrx => {
  let found_arrow = false
  for (let row of mtrx) {
    for (let value of row) {
      if (value === '>') found_arrow = true
      else if (value === 'x' ) {
        // Target must be to the right of the arrow, so the arrow must have been found before the target to hit
        return found_arrow
      }
    }
    // The arrow was on this row, but the target was not, so the arrow cannot hit the target
    if (found_arrow) return false
  }
}
