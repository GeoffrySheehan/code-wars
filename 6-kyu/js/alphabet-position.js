// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
      .map(char => char.charCodeAt() - 'a'.charCodeAt() + 1)
      .join(' ')
  );
}
