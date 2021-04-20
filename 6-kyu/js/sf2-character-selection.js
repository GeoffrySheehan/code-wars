// Street Fighter 2 - Character Selection
// https://www.codewars.com/kata/5853213063adbd1b9b0000be
function streetFighterSelection(fighters, position, moves) {
  let [row, col] = position
  let record = []
  for (let move of moves) {
    switch (move) {
        case 'up': if (row === 1) row -= 1; break;
        case 'down': if (row === 0) row += 1; break;
        case 'left': col = ((--col % 6) + 6) % 6; break;
        case 'right': col = ++col % 6; break;
    }
    record.push(fighters[row][col])
  }
  
  return record;
}
