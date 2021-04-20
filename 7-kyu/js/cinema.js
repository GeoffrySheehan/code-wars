// Going to the cinema
// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
function movie(card, ticket, perc) {
  let discount = ticket * perc
  let sys_a = ticket
  let sys_b = card + discount
  let movies = 1
  while(sys_a <= Math.ceil(sys_b)) {
    movies++
    discount *= perc
    sys_a += ticket
    sys_b += discount
  }
  return movies
};
