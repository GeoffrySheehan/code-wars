// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
  if (walk.length !== 10) return false
  
  let [ns, ew] = [0, 0]
  for (let dir of walk) {
    switch(dir) {
        case 'n': ns++; break;
        case 's': ns--; break;
        case 'e': ew++; break;
        case 'w': ew--; break;
    }
  }
  // if both are 0 then true
  return !(ns || ew)
}
