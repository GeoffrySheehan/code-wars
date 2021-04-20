// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
const complement = {
  'A':'T',
  'C':'G',
  'G':'C',
  'T':'A'
}

function DNAStrand(dna){
  let result = ''
  for (let i in dna) {
    result += complement[dna[i]]
  }
  return result
  
}
