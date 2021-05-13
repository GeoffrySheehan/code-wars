// Chess Fun #3: Chess Knight
// https://www.codewars.com/kata/589433358420bf25950000b6

function chessKnight(cell) {
  let [file, rank] = cell.split('');
  file = file.charCodeAt() - 'a'.charCodeAt() + 1;
  rank = Number(rank);
  
  let moves = 0;
  for (let r = rank - 2; r <= rank + 2; r++) {
    if (r < 1 || r === rank) continue;
    if (r > 8) break;
    
    if (Math.abs(rank - r) % 2) {
      if (file - 2 > 0) moves++;
      if (file + 2 < 9) moves++;
    }
    else {
      if (file - 1 > 0) moves++;
      if (file + 1 < 9) moves++;
    }
  }
  return moves;
}
