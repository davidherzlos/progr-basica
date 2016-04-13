# _*_ coding: utf-8 _*_

# import time
# def hola(n):
#     #time.sleep(1)
#     if n is 0:
#         print("Se la recursion, este llamado de funcion es {0}".format(n))
#         return None
#     print("Recursion en curso: llamado de funcion número {0}".format(n))
#     hola(n-1)

# hola(5)

# Es muy importante perfeccionar objetos y expresiones


# Factorial n! = n(n-1)!

# def factorial(n):
#     if n is 0:  # Fact de 0 es siempre 1
#         return 1
#     else:
#         return n * factorial(n-1)

# print(factorial(5))

# import random

# sus = "_" * 35
# depo = ["piedra", "papel", "tijera"]

# while True:
#     x = input("¿Piedra, papel o tijera?")
#     if x not in depo:
#         print("No hagas trampa")
#         continue
#     pc = random.choice(depo)
#     time.sleep(0.5)
#     print("La compu eligió {0}.".format(pc))

#     # Esto podría ser un ejemplo de guess and check pattenr
#     if pc is x:
#         print("Empate")

#     elif: x is 'piedra' and pc is 'tijera':
#         print("Ganaste")

#     elif: x is 'papel' and pc is 'piedra':
#         print("Ganaste")

#     elif: x is 'tijeta' and pc is 'papel':
#         print("Ganaste")

#     else:
#         print("Perdiste")
#         print("La compu eligió {0} y tu {1}".format(pc, x))


# 99 botellas de cerveza

# def sing(b, end):
#     print(b or "No more", "bottle" + ('s' if b-1 else ''), end)

# for i in range(99, 0, -1):
#     time.sleep(1)
#     sing(i, 'of beer on the wall, ')
#     sing(i, 'of beer, ')
#     print("Take one, and pass it around, ")
#     sing(i-1, 'of beer on the wall.\n')


### Manejo básico de excepciones

try:
    6 / 0
except Exception as e:
    print("Errororor")
    raise e
else:
    print("No hubo excepcion")
finally:
    print("Se imprime finally")





