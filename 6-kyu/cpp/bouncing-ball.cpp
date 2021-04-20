// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

using namespace std;
class Bouncingball
{
public:
    static int bouncingBall(double h, double bounce, double window);
};

int Bouncingball::bouncingBall(double h, double bounce, double window)
{
  if (h <= 0.0) return -1;
  if (0.0 >= bounce || bounce >= 1.0) return -1;
  if (h <= window) return -1;
  
  int count = 1; // Always going to see at least once
  
  h *= bounce;
  while (h > window) // Keep counting until the ball doesn't pass the window anymore
  {        
    count += 2; // Add once on the way up, and again on the way down
    h *= bounce;
  }
  
  return count;
}
