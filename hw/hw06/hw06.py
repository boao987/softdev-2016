def pwdVerification(pwd):
    check1 = [1 for x in pwd if x.isupper()]
    if(len(check1) == 0):
        return False
    check2 = [1 for x in pwd if x.islower()]
    if(len(check2) == 0):
           return False
    check3 = [1 for x in pwd if x.isdigit()]
    if(len(check3) == 0):
           return False
    return True

def pwdStrength(pwd):
    strength = 0
    strength += len(pwd)/8
    uppers = [1 for x in pwd if x.isupper()]
    lowers = [1 for x in pwd if x.islower()]
    numbers = [1 for x in pwd if x.isdigit()]
    symbols = [1 for x in pwd if x.isalnum()]
    
    strength += max(len(uppers)-len(lowers), 0)
    strength += max(len(symbols)-len(numbers), 0)
    
    if(strength <= 3):
        return "Poor"
    elif(strength <= 5):
        return "Fair"
    elif(strength <=8):
        return "Good"
    else:
        return "Strong"

print pwdVerification("abc123A")
print pwdVerification("abc123")

print pwdStrength("abc123")
print pwdStrength("abc123#@")
print pwdStrength("abcABC!@#123ADFJKasdf")
print pwdStrength("abCc13")