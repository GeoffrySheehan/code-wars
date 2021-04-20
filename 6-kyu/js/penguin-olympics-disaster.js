// Penguin Olympics: Swimming Race Disaster
// https://www.codewars.com/kata/6022c97dac16b0001c0e7ccc
function calculateWinners(snapshot, penguins) {
  let lanes = snapshot.toLowerCase()
  .split('\n')
  .map(lane => lane.split('p')[1]) // Get the lane left to swim
  // Add 1 for every wave remaining to swim to the length of the lane
  .map(lane => lane.length + lane.split('~').length - 1)
  
  // Sort the lanes by length
  let sorted_lanes = [...lanes].sort((x, y) => x - y)
  let places = [
    lanes.indexOf(sorted_lanes[0]),
    lanes.indexOf(sorted_lanes[1]),
    lanes.indexOf(sorted_lanes[2])
  ]
  
  return `GOLD: ${penguins[places[0]]}, SILVER: ${penguins[places[1]]}, BRONZE: ${penguins[places[2]]}`
};
