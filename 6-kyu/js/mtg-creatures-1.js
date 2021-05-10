// Magic The Gathering #1: Creatures
// https://www.codewars.com/kata/567af2c8b46252f78400004d
function battle(player1, player2) {
  // [ Battleground
  //   [ Battle 1
  //     [p, t], P1 Creature 1
  //     [p, t]  P2 Creature 1
  //   ],
  //   ...
  // ]
  
  // zip the two arrays together
  const battleground = Array.from(Array(Math.max(player1.length, player2.length)), (_, i) => [player1[i], player2[i]])
  const results = battleground.reduce( (result, battle) => {
    const p1 = battle[0];
    const p2 = battle[1];
    
    // win by default
    if (!p1) {
      result.player2.push(p2);
      return result;
    }
    if (!p2) {
      result.player1.push(p1);
      return result;
    }

    if (p1[0] < p2[1]) { // p1 did not kill p2
      result.player2.push(p2);
    }
    if (p2[0] < p1[1]) { // p2 did not kill p1
      result.player1.push(p1);
    }
    
    return result;
  }, { player1: [], player2:[] });
  
  return results;
}
