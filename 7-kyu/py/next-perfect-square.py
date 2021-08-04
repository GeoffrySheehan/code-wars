# Find the next perfect square!
# https://www.codewars.com/kata/56269eb78ad2e4ced1000013
import math
def find_next_square(sq):
    root = math.sqrt(sq)
    
    if not root.is_integer(): return -1

    root += 1
    return root * root
