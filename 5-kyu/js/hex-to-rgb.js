// Convert A Hex String To RGB
//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
function hexStringToRGB(hexString) {
  return hexString
    .match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/i)
    .slice(1,4) // Get the three captured color channel
    .reduce((colors, channel, i) => {
      const color = parseInt(channel, 16);
      switch(i) {
        case 0: colors.r = color; break;
        case 1: colors.g = color; break;
        case 2: colors.b = color; break;
      }
      return colors;
    }, {});
}
