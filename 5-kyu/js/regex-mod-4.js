// Mod4 Regex
// https://www.codewars.com/kata/54746b7ab2bc2868a0000acf

// In this problem, numbers start with '[' and end with ']'

// This Regular Expression will match with all numbers that are divisible by 4
// There in the last two digits of every number divisible by 4 that follows:
//    If the first digit is odd, then it must be followed by a 2 or a 6
//      Eg. 555636 is divisible by 4 because
//            the final digits are 36,
//            3 is odd and is followed by a 6
//    If the first digit is even, then it must be followed by 0, 4 or 8
//      Eg. 5620 is divisible by 4 because
//            the final digits are 20,
//            2 is even and is followed by 0
// If the number is only a single digit, then assume the first digit is 0 (even)

var Mod4 = /\[[+-]?(?:[048]|\d*(?:[13579][26]|[02468][048]))\]/;

// \[                     Find the start of the number
// [+-]?                  Optionally match with a sign
// (?:                    Choose from one option:
//    [048]                 - Single digit 0, 4 or 8
//    |\d*(?:               - OR Multiple digits, choose from one option:
//        [13579][26]         - Odd case, i.e. The final two digits being an odd digit followed by a 2 or 6
//        |[02468][048]       - OR even case, i.e. The final two digits being an even digit followed by a 0, 4 or 8
// ))                     Close the blocks
// \]                     Find the end of the number
