// Moves in squared strings (I)
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
function vertMirror(str) {
  return str.map(s => [...s].reverse().join(''))
}
function horMirror(str) {
  return str.reverse()
}
function oper(fct, s) {
  return fct(s.split('\n')).join('\n')
}
