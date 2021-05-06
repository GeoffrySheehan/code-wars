// Chess Fun #1: Chess Board Cell Color
// https://www.codewars.com/kata/5894134c8afa3618c9000146

/**
 * Determines the color of a cell
 * Examples:
 *   A1 -> false (dark)
 *   D5 -> true (light)
 * @param {string} cell - The coordinates of a chessboard to check
 * @return {boolean} True if light, False if dark
 */
function isLight(cell) {
  // Split the cell into a rank and file
  let [rank, file] = cell.split('');
  // Convert the rank and file to a number and get its parity
  rank = (rank.charCodeAt() - 'A'.charCodeAt() + 1) % 2;
  file = parseInt(file) % 2;
  // Compare the parities of rank and file to determine color
  // Rank and file with same parity are dark, different parity are light
  //  This means that XOR of the parities will give us square color
  return rank ^ file;
}

function chessBoardCellColor(cell1, cell2) {
  return isLight(cell1) === isLight(cell2);
}
