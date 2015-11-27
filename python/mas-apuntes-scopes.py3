# Apuntes sobre namespaces en python

"""
En python hay dos conceptos principales:
	Los names que son contenedores con los objetos, como variables 
	y los namespaces que son el lugar donde viven
	los names, algo así como el entorno mismo.
"""
"""
Todos los objetos se pueden guardar en names: Modulos, strings, numeros
floats, booleanos, objetos, diccionarios, listas, tuplas, classes y funciones.

Recordemos que todo en python es un ojeto
"""

"""
Los names están organizados como un diccionario dentro de un namespace:
"""
{
	"nombre": "David",
	"numero": 4,
	"tupla": (2,3,5,6),
	"diccionario": {
		"etc": "etc"
	}
	"clase": "codigo de la clase",
	"foo": "codigo de la funcion",
	"modulo": {
		# Su propio namespace con sus names
	}
}

"""
Cada namespace tiene su propio entorno global
Las funciones tienen su propio namespace
Cuando ejecitas úna función importa su modulo o name space
Namespace puede ser lo mismo que entorno
Name puede ser lo mismo que variables
Es importante evitar la collisión de nombres
En tiempo de ejecución los namespaces se crean 
solos y sólo hay un namespace actual en cada 
momento de la ejecución. Puede referenciar otros según su nombre, osea módulo.
El modulo principal de python cuando corres un script es __main__ 
Cada función tiene su namespace __builtin__
Namespace es igual que módulo
Name es cai igual a objetos
En tiempo de ejecución, hay reglas de acceso a los names, según el namespace actual.
Las reglas de alcance: no se puede hacer referencia a names dentro de una función anidada, sólo a un módulo.
Se puede acceder a names en funciones de niveles arriba a la actual
El scope se aplica a los namespaces

La estructura de los entornos es:
__builtin__: names incorporados al interprete de python
	global: names en el namespace del módulo 
		enclosed: names adjuntos, incluidas funciones
			local: names contenidos en el scope de la función actual


