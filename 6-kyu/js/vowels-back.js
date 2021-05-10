// Vowels Back
// https://www.codewars.com/kata/57cfd92c05c1864df2001563
function vowelBack(s){
  // vowels:
  //  a, i, u
  // exceptions:
  //  c -> b
  //  o -> n
  //  d -> a
  //  e -> a
  
  const exceptions = {
    c: 'b',
    o: 'n',
    d: 'a',
    e: 'a',
    a: 'v',
    i: 'i',
    u: 'p',
  }
  
  return s.split('').map(c => {
    if (c in exceptions) return exceptions[c];
    const aCode = 'a'.charCodeAt();
    // Normalize, consonate add, wrap, denormalize
    const newC = String.fromCharCode(((c.charCodeAt() - aCode + 9) % 26) + aCode);
    return 'code'.includes(newC) ? c : newC;
  }).join('');
}
