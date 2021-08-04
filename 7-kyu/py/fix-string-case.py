# Fix string case
# https://www.codewars.com/kata/5b180e9fedaa564a7000009a
import string

def solve(s):
    lowercase = 0
    uppercase = 0
    
    for c in s:
        if c in string.ascii_lowercase: lowercase += 1
        elif c in string.ascii_uppercase: uppercase += 1
        
    if uppercase > lowercase: return s.upper()
    return s.lower()
