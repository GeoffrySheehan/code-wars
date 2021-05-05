
function validSquares(bishop) {
  const moves = [];
  
  let [rank, file] = bishop.split('');
  rank = rank.charCodeAt() - 'a'.charCodeAt() + 1;
  file = parseInt(file);
  
  for (let f = file - 1; f > 0; f--) {
    const diff = file - f;
    const newFile = String.fromCharCode('a'.charCodeAt() + f - 1);
    
    let newRank = rank - diff;
    if (1 <= newRank && newRank <= 8) moves.push(`${newFile}${newRank}`);
    
    newRank = rank + diff;
    if (1 <= newRank && newRank <= 8) moves.push(`${newFile}${newRank}`);
  }
  
  for (let f = file + 1; f <= 8; f++ ) {
    const diff = file - f;
    const newFile = String.fromCharCode('a'.charCodeAt() + f - 1);
    
    let newRank = rank - diff;
    if (1 <= newRank && newRank <= 8) moves.push(`${newFile}${newRank}`);
    
    newRank = rank + diff;
    if (1 <= newRank && newRank <= 8) moves.push(`${newFile}${newRank}`);
  }
  return moves;
}

function bishopAndPawn(bishop, pawn) {
  const moves = validSquares('d4');
  return moves.includes(pawn);
}