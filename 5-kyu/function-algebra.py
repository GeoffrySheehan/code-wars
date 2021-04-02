# Function Algebra
# https://www.codewars.com/kata/605f4035f38ca800072b6d06

class Function:
    def __init__(self, f, df):
        self.f = f
        self.df = df
    
    # call stored function or function derivative if grad is True
    def __call__(self, val, grad = False):
        return self.df(val) if grad else self.f(val)
    
    # function: f(x) + g(x)
    # derivative: f'(x) + g'(x)
    def __add__(self, rhs):
        return Function(lambda x: self.f(x) + rhs.f(x), lambda x: self.df(x) + rhs.df(x))
    
    # function: f(x) - g(x)
    # derivative: f'(x) - g'(x)
    def __sub__(self, rhs):
        return Function(lambda x: self.f(x) - rhs.f(x), lambda x: self.df(x) - rhs.df(x))
    
    # function: f(x) * g(x)
    # derivative:
    #    f(x) * g'(x) + f'(x) * g(x)
    def __mul__(self, rhs):
        return Function(lambda x: self.f(x) * rhs.f(x), lambda x: self.f(x) * rhs.df(x) + self.df(x) * rhs.f(x))
    
    # function: f(x) / g(x)
    # derivative:
    #    ( f'(x) * g(x) - f(x) * g'(x)) / g(x) ^ 2
    def __truediv__(self, rhs):
        return Function(lambda x: self.f(x) / rhs.f(x), lambda x: (self.df(x) * rhs.f(x) - self.f(x) * rhs.df(x)) / rhs.f(x) ** 2)
    
    # function: f( g(x) )
    # derivative:
    #    f'( g(x) ) * g'(x)
    def __matmul__(self, rhs):
        return Function(lambda x: self.f(rhs.f(x)), lambda x: self.df(rhs.f(x)) * rhs.df(x))
