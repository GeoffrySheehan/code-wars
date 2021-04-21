// Catalog
// https://www.codewars.com/kata/59d9d8cb27ee005972000045

function catalog(s, article) {
  if (!s.includes(article)) return 'Nothing';
  
  s = s.trim();
  const pattern = /<prod><(name)>([a-z ]*)<\/name><(prx)>([\d.]*)<\/prx><(qty)>(\d*)<\/qty><\/prod>/;

  return s.split('\n\n')
    // Parse the string into objects
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
