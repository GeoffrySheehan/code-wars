// Chess Fun #2: Bishop And Pawn
// https://www.codewars.com/kata/589425c2561a35dd1a0000a2
function bishopMoves(rank, file) {
  const moves = [];
  const aCode = 'a'.charCodeAt();
  
  for (let r = 1; r <= 8; r++) {
    if (rank === r) continue;
    let diff = Math.abs(rank - r);
    
    let [left, right] = [file - diff, file + diff];
    
    if (left > 0) moves.push(`${String.fromCharCode(left - 1 + aCode)}${r}`);
    if (right < 9) moves.push(`${String.fromCharCode(right - 1 + aCode)}${r}`);
  }
  
  return moves;
}


function bishopAndPawn(bishop, pawn) {
  let [file, rank] = bishop.split('');
  file = file.charCodeAt() - 'a'.charCodeAt() + 1;
  rank = parseInt(rank);
  
  return bishopMoves(rank, file).includes(pawn);
}
