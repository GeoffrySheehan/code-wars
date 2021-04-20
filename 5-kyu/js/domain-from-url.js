// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
   return url.match(/(https?:\/\/)?(www\.)?([^.]+)\./i)[3]
}
