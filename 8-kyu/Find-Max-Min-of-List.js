var min = function(list){
  let temp_list = list.map(x => x)
  temp_list.sort((x, y) => Number(x) - Number(y))
  return temp_list[0];
}

var max = function(list){
  let temp_list = list.map(x => x)
  temp_list.sort((x, y) => Number(x) - Number(y))
  return temp_list[temp_list.length - 1];
}
