// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

/**
 * @param: string (String) - string to be incremented
 * @return: (String) - incremented string
 * Examples:
 *  foo -> foo1
 *  foobar23 -> foobar24
 *  foo0042 -> foo0043
 *  foo9 -> foo10
 *  foo099 -> foo100
 */

function incrementString(string) {
  // Split the string into two parts, the string and the ending number
  // Convert the number to a string and concatenate
  //    * Keep any leading zeros consistent

  const groups = string.match(/(\d*)$/);

  let number = groups[1];
  const word = string.substring(0, groups.index);

  const numLength = number.length;
  if (numLength === 0) return `${word}1`;

  number = String(Number(number) + 1).padStart(numLength, '0');
  return `${word}${number}`;
}
