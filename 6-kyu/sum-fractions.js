// Irreducible Sum of Rationals
// https://www.codewars.com/kata/5517fcb0236c8826940003c9

function gcd(a, b) {
  let remainder = 0;
  while((a % b) > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return b;
}

function sumFracts(l) {
  if (l.length === 0) return null;
  
  const common_denom = l.reduce((prod, fraction) => prod * fraction[1], 1);
  let summed_fraction = l.map(fraction => {
    const numer = (common_denom / fraction[1]) * fraction[0]
    return [numer, common_denom];
  })
  .reduce((sum_frac, fraction) => {
    return [sum_frac[0] + fraction[0], common_denom];
  }, [0, 0]);
  
  const greatest_factor = gcd(summed_fraction[0], summed_fraction[1]);
  const reduced_fraction = [~~(summed_fraction[0] / greatest_factor), ~~(summed_fraction[1] / greatest_factor)];
  if (reduced_fraction[1] === 1) {
    return reduced_fraction[0];
  }
  
  return reduced_fraction;
}
