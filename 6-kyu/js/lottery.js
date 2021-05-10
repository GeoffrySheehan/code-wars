// Lottery Ticket
// https://www.codewars.com/kata/57f625992f4d53c24200070e
function bingo(ticket, win){
  const wins = ticket.reduce((sum, [str, code]) => sum + str.includes(String.fromCharCode(code)), 0);
  
  return (wins < win) ? 'Loser!' : 'Winner!';
}
