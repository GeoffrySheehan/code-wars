// Strip Comments
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd
function solution(input, markers) {
  return input.split('\n')
    .map((line) => {
      const index = markers
        .map( (marker) => line.indexOf(marker) )
        .filter( (index) => index !== -1)
        .sort((a,b) => a - b)
        .shift();

      if (index) return line.slice(0, index).trim();
      return line;
  })
  .join('\n');
};
