// Street Fighter 2 - Character Selection - Part 2
// https://www.codewars.com/kata/58583922c1d5b415b00000ff
function rotate(fighters, position, increment) {
  let mod = fighters.length
  position = (((position + increment) % mod) + mod) % mod
  if (!fighters[position]) position = rotate(fighters, position, increment)
  return position
}

function superStreetFighterSelection(fighters, position, moves){
  let record = []
  let [row, col] = position
  for (let move of moves) {
    switch (move) {
        case 'up': if (row > 0 && fighters[row-1][col]) row--; break;
        case 'down': if (row < fighters.length - 1 && fighters[row+1][col]) row++; break;
        case 'left': col = rotate(fighters[row], col, -1); break;
        case 'right': col = rotate(fighters[row], col, 1); break;
    }
    record.push(fighters[row][col])
  }
  return record;
}
