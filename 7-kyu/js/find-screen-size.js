// Find Screen Size
// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f
function findScreenHeight(width, ratio) {
  const a_ratio = ratio.split(':')
  let height = Math.trunc(width * parseInt(a_ratio[1]) / parseInt(a_ratio[0]))
  return `${width}x${height}`
}
