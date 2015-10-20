# Estructuras para algoritmos

Algoritmo Nombre
Variables
Constantes
Tipos
	{pre:} # especificacion
	Acciones
	{post:} # especificacion
fin del algoritmo

# Especificación

{Pre}
Algoritmo
{Post}

# Metodología de implementación de los esquemas de tratamiento secuencial
Especificar el problema a resolver (pre y post)
Descubrir cual es la secuencia (ejemplo de la banda de autos)
Elegir el esquema adecuado a aplicar (recorrido o busqueda)
Decidir el conjunto de variables que solucionan el problema, se relaciona con
Refinar el esquema (sustituir las partes del esquema con expresiones y acciones)

# Esquema de recorrido de una secuencia

prepararSecuencia
iniciarTratamiento
Comprobar no fin de secuencia
	Tratar elemento de secuencia
	Avanzar en la secuencia
Fin de tratamiento de la secuencia
Tratamiento final de la secuencia

# Esquema de búsqueda dentro de una secuencia

prepararSecuencia
encontrado es falso
iniciarTratamiento
Mientras no fin de secuencia y no encontrado
	actualizar encontrado
	si no encontrado entonces
		tratar elemento
		avanzar secuencia















