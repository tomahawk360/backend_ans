#Importacion
import random as random

#Establece una distancia aleatoria
dist = random.randint(0, 2000)
print(str(dist) + ' kms entre origen y destino')

#Funcion para definir el tiempo de entrega segun distancia
def delitime(distance):
    if distance < 100:
        d = 0
        return print('El paquete llegará hoy')
    elif distance < 200:
        d = 1
    else:
        d1 = 1
        d2 = 0
        a = 200
        while distance > a:
            d = d1 + d2
            d2 = d1
            d1 = d
            a += 100
    return print(str(d) + ' días para llegada del paquete')

#Devuelve el tiempo de entrega para la distancia establecida anteriormente
delitime(dist)