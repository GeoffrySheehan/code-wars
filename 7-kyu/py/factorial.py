# Factorial
# https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
def factorial(n):
    if n < 0 or 12 < n: raise ValueError
    if n in [0, 1]: return 1
    if n == 2: return n

    fact = 2
    for v in range(3, n+1):
        fact *= v
    
    return fact
