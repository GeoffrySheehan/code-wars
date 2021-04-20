// 99 Bottles of Beer
// https://www.codewars.com/kata/52a723508a4d96c6c90005ba
var sing = function () {
  let lyrics = []
  for (let i = 99; i > 0; i--) {
    let count = i > 0 ? i : 'No more'
    let plural = i !== 1 ? 's' : ''
    lyrics.push(`${count} bottle${plural} of beer on the wall, ${count} bottle${plural} of beer.`)
    lyrics.push(`Take one down and pass it around, ${i - 1 > 0 ? i - 1 : 'no more'} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall.`)
  }
  lyrics.push('No more bottles of beer on the wall, no more bottles of beer.')
  lyrics.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
  return lyrics
};
