import math as math

#Funcion que cuenta el numero de divisores de un numero n
def numOfDivisors(n):
    numDiv = 0
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == i:
            numDiv += 1
        else:
            numDiv += 2
    return numDiv

#Serie de Fibronacci
d1 = 1
d2 = 1
numDiv = 1
while numDiv < 1000:
    d = d1 + d2
    d2 = d1
    d1 = d
    #Calcular el numero de divisores del numero actual
    numDiv = numOfDivisors(d)

#Entrega en consola el primer numero con mas de 1000 divisores y su respectivo numero de divisores
print(d)
print(numOfDivisors(d))