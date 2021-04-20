// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  return message
    .split('')
    .map(char => {
      let code = char.charCodeAt();
      if (65 <= code && code <= 90) { // UPPERCASE
        return String.fromCharCode(code + (code < 78 ? 13 : -13));
      }
      if (97 <= code && code <= 122) { // LOWERCASE
        return String.fromCharCode(code + (code < 110 ? 13 : -13));
      }
      return char;
    })
    .join('');
}
