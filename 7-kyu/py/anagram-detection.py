# Anagram Detection
# https://www.codewars.com/kata/529eef7a9194e0cbc1000255
def is_anagram(test, original):
    s1 = ''.join(sorted(test.lower()))
    s2 = ''.join(sorted(original.lower()))
    return s1 == s2
