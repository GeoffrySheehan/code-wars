// Alphabet war
// https://www.codewars.com/kata/59377c53e66267c8f6000027

// These are the only characters with value
// Negative values for left team,
// Positive values for right team
const fighters = {
  'w': -4,
  'p': -3,
  'b': -2,
  's': -1,
  'm':  4,
  'q':  3,
  'd':  2,
  'z':  1
}

function alphabetWar(fight)
{
  
  let score = 0
  if (fight.length > 0) {
    // Convert string to array and iterate
    let array_fight = fight.split('')
    for (let i = 0; i < array_fight.length; i++) {
      // if the array value is a fighter, then add the figher's value to the score, else add zero
      let value = fighters[array_fight[i]]
      if (value === undefined) value = 0;
      score += value
    }
  }
  
  // If the score is negative, then the left won
  // If its positive, then the right won
  // If its zero then no one one.
  if (score < 0) return "Left side wins!"
  if (score > 0) return "Right side wins!"
  
  // if (score === 0)
  return "Let's fight again!";
}
