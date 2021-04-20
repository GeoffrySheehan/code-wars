// Title Case
// https://www.codewars.com/kata/5202ef17a402dd033c000009
String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1) }

function titleCase(title, minorWords = '') {
  return title.toLowerCase().split(' ').map(
    (w, i) => i ? (!minorWords.toLowerCase().split(' ').includes(w) ? w.capitalize() : w) : w.capitalize()
  ).join(' ')
}
