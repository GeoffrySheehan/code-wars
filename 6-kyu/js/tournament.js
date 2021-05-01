// Elimination Tournament 
// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0
const tourney = array => {
  const output = [];
  const copy = array.slice();

  let bye = null;
  while(1 < copy.length) {
    // Deep copy the tournement onto the output
    output.push(copy.slice());

    // If uneven number of pairs, then setup another bye round
    if (copy.length % 2) bye = copy.pop();
    
    // Elminate for the next round
    for (let i = 0; i < copy.length; i++) {
      const remove = (copy[i] < copy[i+1]) ? i : i + 1;
      copy.splice(remove, 1);
    }
    // Push the bye round back onto the tournament 
    if (bye !== null) {
      copy.unshift(bye);
      bye = null;
    }
  }
  // Push the victor onto the output;
  output.push(copy.slice());
  return output;
}
