def divisors(integer):
    pass 
    arr = []
    for i in range(integer):
        if i==0 or i==1 or i==integer:
            continue
        arr.append(i) if integer%i==0 else arr
    return arr if arr != [] else f'{integer} is prime'

def divisors(num):
    l = [a for a in range(2,num) if num%a == 0]
    if len(l) == 0:
        return str(num) + " is prime"
    return l

def divisors(n):
    return [i for i in xrange(2, n) if not n % i] or '%d is prime' % n
