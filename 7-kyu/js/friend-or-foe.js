// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f
function friend(friends){
  let results = []
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i]
    if (friend.length === 4) {
      results.push(friend)
    }
  }
  return results
  
}
