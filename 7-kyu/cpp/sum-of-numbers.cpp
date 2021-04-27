// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

int get_sum(int a, int b)
{
  if (a == b) return a;
  int small = std::min(a, b);
  int big = std::max(a, b);
  
  int sum = 0;
  for(; small <= big; small++)
  {
    sum += small;
  }
  
  return sum;
}
