// Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d
function switcheroo(x){
  return x.split('').map(c => 'bac'[c.charCodeAt() - 97]).join('')
}
