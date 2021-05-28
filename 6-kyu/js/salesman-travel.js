// Salesman's Travel
// https://www.codewars.com/kata/56af1a20509ce5b9b000001e
function travel(r, zipcode) {
   const addresses = r.split(',')
      .reduce(
         (list, address) => {


            const index = zipcode && address.endsWith(zipcode) ? address.indexOf(zipcode) : -1;

            if (index > -1) {
               const groups = address.slice(0, index).trim().match(/(\d*) (.*)/);
               console.log({ zipcode, address, groups, index });
               list[0].push(groups[1]);
               list[1].push(groups[2]);
            }

            return list;
         }, [[], []]
      )
      ;

   return `${zipcode}:${addresses[1].join(',')}/${addresses[0].join(',')}`;
}