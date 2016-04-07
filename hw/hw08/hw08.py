def union(a,b):
    ans = []
    ans += [x for x in a if x not in ans]
    ans += [x for x in b if x not in ans]
    return ans
    
print union([1,2,3],[2,3,4])

def intersection(a,b):
    ans = []
    ans += [x for x in a if x in b]
    return ans

print intersection([1,2,3],[2,3,4])

def setDiff(a,b):
    ans = []
    ans += [x for x in a if x not in b]
    return ans
    
print setDiff([1,2,3],[2,3,4])
print setDiff([2,3,4],[1,2,3])

def symDiff(a,b):
    return union(setDiff(a,b), setDiff(b,a))

print symDiff([1,2,3],[2,3,4])

def cartProduct(a,b):
    ans = []
    ans += [(x,y) for x in a for y in b]
    return ans
    
print cartProduct([1,2],["red","white"])