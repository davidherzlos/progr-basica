# 1. Crear names que apuntes a diferentes elementos del lenguaje
# 2. Imprimir su valor para ver si es objeto tipo escalar, tipo estructurado
# o dirección de memoria
# 3. Tratar de utilizar el nombre como un namespace y documentar
# 4. Considerar la tabla generada

# Names que apuntan a escalares
booleano = True
print("soy un ", type(booleano), booleano)

entero = 12345
print("soy un ", type(entero), entero)

flotante = 1234.5
print("soy un ", type(flotante), flotante)

cadena = "Una cadena de caracteres"
print("soy un ", type(cadena), cadena)

# Names que apuntan a tipos estructurados
tupla = (1, 2, 3, 4, 5)
print("soy un ", type(tupla), tupla)

lista = ["Uno", 2, 3.1, True, "Cinco"]
print("soy un ", type(lista), lista)

diccionario = {
    'nombre1': 'Valor 1',
    'nombre2': 'valor 2'
}
print("soy un ", type(diccionario), diccionario)

conjunto = {1, 2, 3}
print("soy un ", type(conjunto), conjunto)

# Names que apuntan a referencias de memoria


class Animal(object):
    """docstring for Animal"""
    def __init__(self, name):
        super(Animal, self).__init__()
        self.name = name

    def saludar(self):
        print("soy", self.name)
print("soy un ", type(Animal), Animal)

perro = Animal("Fido")
print("soy un ", type(perro), perro)

print("soy un ", type(perro.saludar), perro.saludar)

elipsis = Ellipsis
print("soy un ", type(elipsis), elipsis)

nada = None
print("soy un ", type(nada), nada)

mapa = map(str, [1, 2, 3, 4])
print("soy un ", type(mapa), mapa)


def foo(arg):
    print("soy un ", type(arg), arg)
    foo_var = 12345
    print("soy un ", type(foo_var), foo_var)
print("soy un ", type(foo), foo)

import datetime
print("soy un ", type(datetime), datetime)
datetime.prop = 'Hola'
print(datetime.prop)

