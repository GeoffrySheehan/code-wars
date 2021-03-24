// Tortoise racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c
const SEC_PER_HOUR = 3600
const MIN_PER_HOUR = 60

function race(v1, v2, g) {
  if (v2 < v1) return null
  let time = Math.floor(g / (v2 - v1) * SEC_PER_HOUR) // convert to seconds
  let hrs = Math.floor(time / SEC_PER_HOUR);
  let mins = Math.floor((time - (hrs * SEC_PER_HOUR)) / MIN_PER_HOUR);
  let secs = time - (hrs * SEC_PER_HOUR) - (mins * MIN_PER_HOUR);
  
  return [hrs, mins, secs]
}
