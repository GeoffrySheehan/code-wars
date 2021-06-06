// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b){
  return [r,g,b].map(channel => (
    Math.min(Math.max(channel, 0), 255) // Bound check [0, 255]
    .toString(16)     // Convert to hex string
    .padStart(2, '0') // Ensure correct width
    .toUpperCase()
  )).join('');
}
