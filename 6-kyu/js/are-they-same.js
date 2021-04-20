// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c
function comp(array1, array2){
  if (array1 === null || array2 === null) return false
  if (array1.length !== array2.length) return false
  
  // clone the arguments to preserve the originals
  a1 = array1.map(x => x ** 2)
  a2 = array2.map(x => x)
  
  // sort the clones by ascending number value
  a1.sort((x, y) => x - y)
  a2.sort((x, y) => x - y)

  // check element by element for mismatches
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false
  }
  return true
}
