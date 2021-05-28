// IPv4 to int32
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
function ipToInt32(ip){
  const binary = ip.split('.')
    .map(
      (octet) => parseInt(octet).toString(2).padStart(8, '0')
    )
    .join('');
  return parseInt(binary, 2);
}
