// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function(list){
  let temp_list = list.map(x => x)
  temp_list.sort((x, y) => Number(x) - Number(y))
  return temp_list[0];
}

var max = function(list){
  let temp_list = list.map(x => x)
  temp_list.sort((x, y) => Number(y) - Number(x))
  return temp_list[0];
}
