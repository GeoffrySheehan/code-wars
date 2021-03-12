// A Wolf in Sheep's Clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  // Find the wolf, his index in the queue is the sheep that needs to be warned.
  let warn = queue.length - 1 - queue.indexOf('wolf')
  return warn ? `Oi! Sheep number ${warn}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
}
