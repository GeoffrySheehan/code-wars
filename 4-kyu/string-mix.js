// Strings Mix
// https://www.codewars.com/kata/5629db57620258aa9d000014
function objectify(string) {
  // normalize string
  string = string.replace(/[^a-z]/g, '');
  
  // Collect character counts
  const obj = {}
  for (let c of string) {
    if(c === c.toLowerCase()) {
      c in obj ? obj[c]++ : obj[c] = 1;
    }
  }
  
  // remove single characters
  for (let c in obj) {
    if (obj[c] === 1) delete obj[c];
  }
  
  return obj
}

const value = (v) => (v || 0);

function combine(o1, o2) {
  const keys = [...new Set([...Object.keys(o1), ...Object.keys(o2)])];
  
  
  const substrings = []
  for (let key of keys) {
    if (value(o1[key]) < value(o2[key])) {
      substrings.push(`2:${ key.repeat(o2[key]) }`);
    }
    else if (value(o1[key]) > value(o2[key])) {
      substrings.push(`1:${ key.repeat(o1[key]) }`);
    }
    else {
      substrings.push(`=:${ key.repeat(o1[key]) }`);
    }
  }
  
  substrings.sort((a,b) => {
    if (a.length === b.length) return b < a;
    return b.length - a.length
  });
  
  return substrings;
  
}

function mix(s1, s2) {
  // your code
  const totals = combine(objectify(s1), objectify(s2))
  console.log(totals);
  return totals.join('/')
}
