# Find the capitals
# https://www.codewars.com/kata/539ee3b6757843632d00026b
def capitals(word):
    cap_list = []
    for (i, c) in enumerate(word):
        if c.isupper(): cap_list.append(i)
    
    return cap_list
