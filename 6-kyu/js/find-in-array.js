// Find within array
// https://www.codewars.com/kata/51f082ba7297b8f07f000001
var findInArray = function(array, iterator) {
  
  for (let index = 0; index < array.length; index++) {
    if (iterator(array[index], index)) return index;
  }
  
  return -1;
};
