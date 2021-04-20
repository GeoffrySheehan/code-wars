// Poker cards reducer
// https://github.com/geosheehan/code-wars/new/main/5-kyu
function reduceIntCards(input) {
  return input.map(code => code % 13).sort((a, b) => a - b);
}

function reduceStrCards(input) {
  const int_input = input.map(card => {
      let code = card[0];
      
      switch(code) {
        case 'A': return 0;
        case 'T': return 9;
        case 'J': return 10;
        case 'Q': return 11;
        case 'K': return 12;
        default: return Number(code) - 1;
      }

    });
  return reduceIntCards(int_input).map(code => {
    switch(code) {
      case 0: return 'A';
      case 9: return 'T';
      case 10: return 'J';
      case 11: return 'Q';
      case 12: return 'K';
      default: return (code + 1).toString();
    }
  });
}

function reduceCards(input) {
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return [];
  if (typeof input[0] === 'number') return reduceIntCards(input);
  return reduceStrCards(input);   
}
