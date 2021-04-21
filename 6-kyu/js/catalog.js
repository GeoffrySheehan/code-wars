// Catalog
// https://www.codewars.com/kata/59d9d8cb27ee005972000045

/**
* This function retrieves a formatted list of all products partially matching a given name.
* Examples:
*  s, '' -> 'Nothing'
*  s, 'ladder' -> 'ladder > prx: $112 qty: 12'
*  s, 'saw' -> 'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32'
*  s, 'wood pallet' -> 'wood pallet > prx: $65 qty: 21'
* @param {string} s - the xml-like string of products
* @param {string} article - the product being searched for
* @returns {string} a formatted string of all products that match the given article
*/

function catalog(s, article) {
  // Return 'Nothing' if the article doesn't exist in the product string
  if (!s.includes(article)) return 'Nothing';
  
  s = s.trim();
  const pattern = /<prod><(name)>([a-z ]*)<\/name><(prx)>([\d.]*)<\/prx><(qty)>(\d*)<\/qty><\/prod>/;

  // split the product string into an array of products
  return s.split('\n\n')
    // Parse the product strings into objects
    .map(str => {
      const matches = pattern.exec(str);
      const obj = {}
      for(let i = 1; i < matches.length; i += 2) {
        obj[matches[i]] = matches[i + 1];
      }
      return obj;
    })
    // Filter out the objects we don't want
    .filter(obj => obj.name.includes(article))
    // Convert from obj to formatted string
    .map(obj => `${obj.name} > prx: $${obj.prx} qty: ${obj.qty}`)
    .join('\r\n');
}
