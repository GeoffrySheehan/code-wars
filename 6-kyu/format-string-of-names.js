// Format a string of names like 'Bart, Lisa & Maggie'.
// https://www.codewars.com/kata/53368a47e38700bd8300030d
function list(names){
//   Base cases
  if (names.length === 0) return ''
  if (names.length === 1) return names[0]['name']
//   Extract all but final name
  let arr_names = []
  for (let i = 0; i < names.length-1; i++) {
    arr_names.push(names[i].name)
  }
//   Join names in comma seperated string
  let result = arr_names.join(', ')
//   Append final name with &
  result += ` & ${names[names.length-1].name}`
  
  return result
}
