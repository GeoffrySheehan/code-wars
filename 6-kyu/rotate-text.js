// All Star Code Challenge #15
// https://www.codewars.com/kata/586560a639c5ab3a260000f3

function rotate(str){
  const output = [];
  const rotated = str.split('');
  
  for (let i = 0; i < str.length; i++) {
    let char = rotated.shift();
    rotated.push(char);
    output.push(rotated.join(''));
  }
  
  return output;
}
