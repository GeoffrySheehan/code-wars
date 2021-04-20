// Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

long long rowSumOddNumbers(unsigned n)
{
  unsigned first = n*n - n + 1;
  long long sum = 0;
  for (unsigned i = 0; i < n; i++)
  {
    sum += first;
    first += 2;
  }
  return sum;
}
