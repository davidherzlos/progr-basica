"""Hola este
	es un comment
	de varias lineas"""

# Este es un comentario simple de una línea


# Forma correcta de escribir una variable:

mi_variable = 123

# Forma incorrecta

mi_variable  =  123
mivariable = 123
miVariable = 123  # Esto sí se podría con javascript

# Cadenas de varias lineas

cadena = """Una cadena
de varias
lineas"""

# Los booleanos son así

boleano = True
boleano = False

# El pep8 define las reglas de estilo para escribir en python, es muy importante revisarlo

# Otra regla del pep8: siempre utiliza espacio antes y después de cualquier operador

23423 ** 3  # Así
"wretert" + "345sdf"


# Una regla importante del pep8, los comentarios deben indicar para qué son:

# TODO: esto significa algo por hacer
# FIXME: esto significa algo por corregir
# XXX: esto también significa que algo se debe corregir

# Los comentarios deben tener dos espacios de separación del código, en caso de estar en la misma linea, y uno entre el simbolo y el texto

print "Hola"  # Imprimí mi nombre y escribí un comment correctamente

#En python el código se debe identar a 4 espacios


# Parece que la forma de indicar a un archivo de python la codificación se hace de manera sencilla con:

# _*_ coding: utf-8_*_


# También tiene algo como la asignación múltiple de variables, ejemplos:

var_uno, var_dos, var_tres = 123123, "Hola mundo", True  # Asignación paralela de variables


una_tupla = ("Hola", "mundo")
palabra_uno, palabra_dos = una_tupla

# En python, los if deben de ir con if, elif, y else, las expresiones de validación de la condición no llevan llaves y los bloques de código se abren con dos puntos, ejemplo

if mi_var == 12123:
	print mi_var
elif mi_var == "Hola mundo":
	print mi_var
else:
	print "¿Pues qué chingados?"


"""Tipos de datos complejos, 
estos tipos son colecciones de datos"""

# Ahora vamos con los tipos de datos mas complejos

# Tuplas

mi_tupla = (1, "dos", True, False, 1.222)  # Una tupla es como una lista, pero sus valores son inmutables, no se pueden modificar una vez creados, creo que solo acepta inmutables

mi_tupla[0]  # Accediendo al indice 0 de la tupla
mi_tupla[2:]  # Accediendo del indice 2 en adelante
mi_tupla[:5]  # Accediendo del indice 5 hacia atrás
mi_tupla[1:3]  # Accediendo del indice 1 al 3


# Listas

mi_lista = [1, "dos", True, False, []]  # La lista se parece mucho a un array, sus valores pueden ser cambiados, permite la mutabilidad.

mi_lista[2]  # Se accede igual que en las tuplas

mi_lista.append("nuevo valor")  # Las listas a diferencia de las tuplas, permiten agregar datos


# Diccionarios

# Mientras que a las listas y tuplas solo se les accede por número de indice, a los diccionarios, se les puede acceder por medio de su llave, son colecciones de pares clave-valor. Su notación se parece mucho a la de los objetos en JS

mi_dict = {'clave_1': "String", 'clave_2': "True", 'clave_3': False}

mi_dict['clave_1']  # Accediendo a una clave del diccionario

mi_dict['clave_4'] = "Otro string"  # Creando nuevo valor

mi_dict['clave_3'] = "True"  # Modificando un valor

del(mi_dict['clave_1'])  # Borrando un valor


"""Las operaciones multiples con 
datos complejos son la onda, investigarlas"""


# Esto es sobre los módulos y paquetes

# Un paquete es como una carpeta llena de módulos, los módulos son archivos de python

import modulo  # Aquí importas un archivo.py

import paquete1.modulo1  # Aquí importas el módulo 1 del paquete1

import paquete.subpaquete.modulo2  # Aquí importas un modulo que es parte de un paquete, que a su vez es parte de otro paquete (ver archivos de muestra)

"""Hay que investigar
sobre los NAMESPACES en python"""



"""Introducción a
 las
 Funciones"""

# Una función antes que nada, es un subalgoritmo, un algoritmo empaquetado en una referencia.

# La definición de funciones se hace de la siguiente manera


 def una_funcion(parametro):  # Los nombres siguen las mismas reglas que las variables
 	# Aquí va el algoritmo

# TODA estructura de control comieza su bloque de código con dos puntos

# Para definir las funciones, se utilizan: el keyword def el mismo estilo de nombrado que en las variables y se utilizan paréntesis para las funciones, ejemplo:


def foo(dato):  # Defino mi función
	print dato

foo("Hola el mundo")  # Invoco mi función

# Si quieres asignar el resultado de una función a una variable, hay que usar return


def foo(dato):  # Defino mi función
	return dato
	
imprimir = foo("Feliz navidad soquetes")  # La invocación se hace sin punto y coma

"""Parámetros de las funciones"""

# Un parámetro, es un valor que el entorno local (función), recibe del entorno global, como en todos lados se separa por comas y pueden ser tantos argumentos como sean necesarios, python considera los parámetros como variables de ámbito local dentro de la función


def otra_funcion(nombre, apellido, edad, genero):
	# Algoritmo

# Se pueden incluir parámetros que pasaría por omisión, si no fuera explícito. En javascript es con un operador || pero en pyhton parece ser con un keyword como parámetro


def una_funcion_mas(nombre, mensaje='Hola mundo'):  # La asignación no lleva espacio (pep8)
	# Algoritmo

# Debe haber dos lineas que antecedan a cualquier función, revisa hacia atrás.

"""Keywords como parámetros
en python se pueden hacer cosas tan locas como estas:"""


def my_function(nombre, apellido="Ord"):
	# Algoritmo

my_function(nombre="David", apellido="Ord")  # Wouuu da demasiada libertad a los parámetros al momento de invocar.


"""Parámetros
indefinidos, fijos y arbitrarios """
# Si tenemos parámetros indefinidos, al igual que javascript, en python podemos pasarselos

def one_function():
	# Algoritmo

one_function(param_uno, param_dos, param_tres, param_cuatro)  # Llegarán a la función como tupla

"""Las funciones son muy importantes y hay que entenderlas, tienen muchas funcionalidades en cualquier lenguaje"""

"""Importante, las funciones deben estar dedicadas a una sola cosa, reutilizable, una sola acción, tan genérica como sea posible"""


"""OBJETOS"""

# En python todo es un objeto


# Despupes de haber leído todo lo de eugenia bahit sobre objetos, van algunos ejemplos:

# Definiendo algunas classes

class Pantalon:
	color = "azul"

class Pierna:
	complexion = "gorda"
		
class Persona:
	altura = 1.75
	peso = 75
	piernas = Pierna()
	pantallones = Pantalon()  # Esto es composición

# Métodos, y otra cosa, aquí vamos a usar la caracrerística composición (atributos objeto)

class Rueda:
	rodada = 16

class Bicicleta:
	color = "negro"
	ruedas = Rueda()
	def rodar(self):  # Siempre se define self como parámetro del método
		# Algoritmo

# Creando algunos objetos (instanciar objetos)

bici = Bicicleta()  # Una instancia
bicicleta.precio = "Mucho dinero"  # Agregando una propiedad al objeto

"""Herencia"""

# Objetos que comparten los mismos atributos y sólo se diferencian por su especializción en uno o mas atributos o cualidades.

# Técnicamente, una clase hereda de otra


class Pelo(object):  # Una clase sin dependencias
	color = "negro"
	chino = True

class Pierna(object):  # Composición
	pelos = Pelo()
	medida = 89

class Mamifero(object):  # Una clase con un atributo Objeto (otra clase: técnica de composicion)
	piernas = pierna()

# Herencia ahora sí, un mamifero que obtenga todo lo anterior, mas sus cualidades como humano

class Ropa(object):  # Se le pasa como parámetro object, pues heredará de object, la clase principal de python que define todos los objetos
	color = "Negra"
	talla = "mediana"
	nueva = False

class Humano(Mamifero):  # Se le pasa como parámetro la clase de la cual va a heredar
	su_ropa = Ropa()
	def pensar(self):
		# Algoritmo