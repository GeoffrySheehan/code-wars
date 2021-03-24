// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
  const num_likes = names.length;
  switch(num_likes) {
    case 0: return "no one likes this";
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      const other_likes = num_likes - 2;
      return `${names[0]}, ${names[1]} and ${other_likes} others like this`;
  }
}
