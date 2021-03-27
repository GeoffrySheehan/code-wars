// Count IP Addresses
// https://www.codewars.com/kata/526989a41034285187000de4
function ipToDecimal(ip) {
  let p = 3;
  return ip.split('.').map(Number).reduce((acc, val) => acc += (val * (256 ** p--)), 0);
}

function ipsBetween(start, end){
  return Math.abs(ipToDecimal(end) - ipToDecimal(start));
}
