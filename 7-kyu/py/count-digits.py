# Count the Digit
# https://www.codewars.com/kata/566fc12495810954b1000030
def nb_dig(n, d):
    count = 0
    for i in range(0, n+1):
        count += str(i * i).count(str(d))
    return count
