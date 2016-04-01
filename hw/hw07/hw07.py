def repeat(s):
    def times(n):
        r=""
        for i in range(n):
            r+=s
        return r
        
    return times
    
r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat("cool")(3)