// Which are in?
// https://www.codewars.com/kata/550554fd08b86f84fe000a58
function inArray(array1,array2){
  array1.sort() // Put substrs in lexicographical order
  return array1.filter((substr) => {
    for (let str of array2) {
      if (str.includes(substr)) return true;
    }
    return false;
  });
}
