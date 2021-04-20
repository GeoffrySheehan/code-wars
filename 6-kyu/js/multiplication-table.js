// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
multiplicationTable = function(size) {
  let table = Array.from(Array(size), () => new Array(size))
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      table[i][j] = (i+1) * (j+1)
    }
  }
  return table;
}
