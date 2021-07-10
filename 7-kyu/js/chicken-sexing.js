// Chicken Sexing
// https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb
function correctness(bobsDecisions, expertDecisions) {
  let sum = 0;
  bobsDecisions.forEach((decision, index) => {
    if (decision === expertDecisions[index]) return sum++;
    if ([decision, expertDecisions[index]].includes('?')) return sum += 0.5;
  })
  return sum;
}
