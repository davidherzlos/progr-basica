# Namespaces

# En el python interactivo, el namespace es __main__, pero me queda duda, otro artículo dice que es cuando sjecutas un script y las funciones oncorporadas en main viven en __builtin__

# Los moulos tienen espacios de nombre globales Importantisimo


import math  # Módulo es un objeto !! WOUU, todo es un objeto

variable1 = 123234
variable2 = "Hola mundo global"
variable3 = True
variable4 = ("Esta", "es", 1, "Tupla")
variable5 = [False, "Hola", 234, (3, 4, 6, "Hola otravez")]

def saludar():
	print "Hola Mundo"
	pass

variable7 = saludar()  # Su espacio de nombres local se crea cuando es llamada

class objeto(object):
	color "Negro"
	tamaño: 5
	pass

variable8 = objeto()

variable9 = math.sqrt(9)

def comportarse(end=" "):
	saludar()
	pass

variable10 = comportarse()

# Un scope es una región textual de un programa en python donde un espacio de nombres es accesible directamente

# Los scopes se determinan estáticamente, pero se usan de manera dinámica

# Hay por lo menos 4 scopes anidados, cuyos namespaces son directamente accesibles sin prefijo

	"""
		El scope interno
		Los espacios de nombres de las funciones anexas
		El scope anteúltimo, que contiene los nombres globales del módulo actual
		El scope exterior, donde se busca al final, es l espacio de nombres que contiene los nombres incluidos o builtins
	"""

# Cada modulo tiene espacio de nombres globales
# Las definiciones de clases crean un espacio de nombres en el ámbito local