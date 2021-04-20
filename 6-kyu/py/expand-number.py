# Write Number in Expanded Form
# https://www.codewars.com/kata/5842df8ccbd22792a4000245

def expanded_form(num):
    digits = []
    while (num > 0):
        [num, rem] = divmod(num, 10)
        digits.append(rem)
           
    digits = [str(digit * 10 ** i) for i, digit in enumerate(digits) if digit > 0]
    digits.reverse()
    
    return ' + '.join(digits)
