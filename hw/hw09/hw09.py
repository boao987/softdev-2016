import time

def nameArgLogger(f):
    def inner(*arg):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

def execTime(f):
    def inner(*arg):
        startTime = time.time()
        f(*arg)
        endTime = time.time()
        
        return endTime-startTime
    return inner
    
    
@nameArgLogger
@execTime
def fib(n):
    if (n <= 2):
        return 1
    else:
        return fib(n-2) + fib(n-1)

print fib(5)