# Exes and Ohs
# https://www.codewars.com/kata/55908aad6620c066bc00002a
def xo(s):
    count = 0
    for c in s:
        if c.lower() == 'x': count += 1
        elif c.lower() == 'o': count -= 1
    return count == 0
