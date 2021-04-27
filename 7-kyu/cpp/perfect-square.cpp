// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

#include <cmath>
bool is_square(int n)
{
  if (n < 0) return false;
  
  int root = std::round(std::sqrt(n));
  return n == root * root;
}
