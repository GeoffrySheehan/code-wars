// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
  return x.split(' ').map(word => {
    const chars = word.split('');
    let count = chars.reduce((sum, c) => sum + c.charCodeAt() - 'a'.charCodeAt() + 1, 0);
    return {count, word};
  })
  .sort((a,b) => b.count - a.count)[0].word;
}
