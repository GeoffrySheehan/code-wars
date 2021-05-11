function presents(a) {
   const friends = a.length;
   let result = a.slice();

   console.log(result);

   a.forEach((gifter, giftee) => {
      // Gifters are 1 indexed
      result[gifter - 1] = giftee + 1;
   });

   return result;
}