# Objetos del lenguaje algorítmico

Cada objeto tiene:
 - Indentificador (Nombre del objeto)
 - Tipo (Aquellos valores que acepta y las operaciones que puede hacer: string, boolean, etc.)
 - Rango de valores (Valores del cojunto al que pertenece)
 - Operadores internos (Devuelven un valor del mismo tipo)
 - Operadores externos (Devuelven valores de diferente tipo, ejemplo, los operadores de comparación o relacionales)
 - Sintaxis de valores (Cómo se escribe)

# Sintaxis de expresiones
Aquí puedes ver sintaxis y comparar con toos los lenguajes, usando diagramas sintácticos y todo lo que esté al alcance

# Semántica (Investigar)

# Evaluación (Precedencia y asociatividad)




# Estructuras para algoritmos

algoritmo nombre;

	const
		nombreCostante1: tipo = valorConstante1;
		nombreCostante2: tipo = valorConstante2;
	fconst

	tipo
		nombreTipo1 = definicionTipo1;
		nombreTipo2 = definicionTipo2;

	ftipo

	var
		nombreVariable1: tipoVariable1;
		nombreVariable2: tipoVariable2;
	fvar
		accion1;
		accion2;
falgoritmo

# Especificación

El estado del entorno es el valor de las variables en un momento determinado
Los algoritmos pueden tener una especificación del estado inicial general y el estado final general

variables

{Pre: }
	Algoritmo
{Post: }

## También puede haber estados intermedios

variables
{Pre:}
	Algoritmo
		{pre: }
		accion1;
		{post: }
		--La post de la acción anterior, es la pre de la siguiente
		{pre: }
		accion2;
		{post: }
{Post: }

# Acciones

## Asignación
	nombreVariable = expresion

## Composición de acciones 

### Secuencial
	accion1;
	accion2;
	accion...

### Alternativa

Simple
	si expresion entonces
		accion1;
	fsi

Doble
	si expresion entonces
		accion1;
	sino
		accion2;
	fsi

Compuesta
	si expresion entonces
		accion1;
	sino si expresion entonces
		accion2;
	sino
		accion3;
	fsi

### Iterativa

while
	mientras expresion hacer
		accion;
	fmientras

for
	para indice = valorinicial hasta valorfinal [paso incremento] hacer
		accion;
	fpara

Invariante: Descripción de la evolución de los cálculos acumulado


# Acciones

## Definición

Una acción es un subalgoritmo...

accion nombre(param1, param2..., param-n)
	var
		nombreVariable1: tipoVariable1;
		nombreVariable2: tipoVariable2;
	fvar
		accion1;
		accion2;
faccion	

## Invocación

nombreAccion(obj1, obj2...,obj-n);

## Parámetros

Los parametros sirven para independizar la función de algún entorno concreto y poderla ejecutar en cualquier entorno (Investigar)
Parametro formal: abstracción de objetos del entorno, que definen que puede recibir la función
Parametro actual: sobre que objetos concretos del entorno que debe utilizar o sobre los que debe actuar; puede ser cualquier expresión válida del leguaje algorítmico.

## Tipos de parámetros

Entrada: Sólo interesa consultar su valor; aunque se pueda modificar después, no se afecta al parametro actual. Puede ser cualquier expresión
Salida: Sólo interesa asignarle un valor; el valor se crea dentro de la acción(Investigar) Se devuelve en forma de variable
Entrada/salida: Nos interesa consultar y modificar su valor; podrá ser leido y toda modificación afectará al parametro actual. Se devuelve en forma de variable

# Funciones

Son iguales a las acciones, salvo lgunas diferencias enlistadas.

funcion nombre(param1, param2..., param-n):tipo
	var
		nombreVariable1: tipoVariable1;
		nombreVariable2: tipoVariable2;
	fvar
		accion1;
		accion2;
faccion	


## Acciones != que funciones(lambdas, funcion anónima, etc)

Acciones:

1. Las acciones no pueden aparecer en las expresiones.
2. Por lo tanto, se pueden invocar por si mismas.
3. No se pueden asignar a variables
4. Pueden tener parámetros de todo tipo
5. Las acciones afectan los parametros actuales u objetos actuales
6. Las acciones crean un entorno local, que interactua con un entorno global (controlador) !IMPORTANTE

Funciones:

1. Las funciones sólo pueden aparecer en las expresiones. 
2. Por lo tanto no se puede invocar por si mismas. 
3. Se debe asignar a variables.
4. Sólo pueden tener parámetros de entrada.
5. Toda función retorna un valor final. Las funciones no afectan los parametros actuales u objetos actuales
6. Las funciones crean un entorno local, que interactua con un entorno global (controlador) !IMPORTANTE




# Esquema de recorrido de una secuencia
algoritmo EsquemaRecorrido
	prepararSecuencia
	iniciarTratamiento
	mientras no fin de secuencia hacer
		tratarElemento
		avanzarSecuencia
	fmientras
	tratamientoFinal
falgoritmo



# Esquema de búsqueda en una secuencia
algoritmo EsquemaBusqueda
	var
		encontrado;
	fvar
	prepararSecuencia
	encontrado = falso;
	inicioTratamiento
	mientras no fin de secuencia y no encontrado hacer
		actualizar encontrado
		si no encontrado entonces
			tratar elemento
			avanzar secuencia
		fsi
	fmientras
falgoritmo

# Metodología de implementación de los esquemas de tratamiento secuencial
1. Especificar el problema a resolver {pre:, post:}
2. Descubrir cual son las secuencias presentes (ver ejemplo de la banda automática de autos)
3. Elegir el esquema adecuado a aplicar (recorrido, busqueda o ambos combinados)
4. Decidir el conjunto de variables (son las que solucionan el problema)
5. Refinar el esquema (sustituir las partes del esquema con expresiones o acciones del lenguaje algoritmico)















