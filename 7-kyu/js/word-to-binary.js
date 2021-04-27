// Word to binary
// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str) {
  return str
    .split('')  // string to array of characters
    .map(c => c  // For each character
         .charCodeAt()  // Get the character code as an int
         .toString(2)  // Convert character code to binary
         .padStart(8, '0')  // Make sure binary string is 8 digits long
    );
}
