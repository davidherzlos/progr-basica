/*
Una sentencia deja es una sentencia en la medida en que incorpora keywords, modifica el estado del entorno y cambia la secuancia de acciones.

Las sentencias o statements son comandos, acciones que modifican el estado de los objetos, según la algorítmica, la unica acción que modifica el estado del entorno es la creación o modificación de variables
la asignación. Pero hay varias expreiones que lo modifican. Estas expresiones que modifican el entorno son expression statements.

Una expresion deja de serlo para convertirse en una sentencia cuando modifica el estado del entorno, la división a veces puede ser muy ambigua.

Donde sea que puedas escribir un statement también puedes escribir un expresion, en cambio no puedes escribir un statement donde sea que se espere escribir un expresion

Las acciones tienen composición, alternativa, iterativa y secuencial.

El camino intermedio entre expresion y statements son las expresion statements
*/


	// Expresion statements (expresiones que cambian el entorno)

		//Function invocation
				foo(); // Pueden o no modificar el estado del entorno


		// Assigment expressions o expresion statements
			a = expression;


		// Otros casos: operadores que modifican el entorno

			//operator with side effects
			++
			--
			*=, +=, -=, etc
			
			//delete object expresion with side effects
			delete Object.property
			
			// Invocation operator, function call operator
			(expresion)


	// Declaration statements

		// Funtion declaration statement
			function expresion (argument) {
				
			}

		// Variable declaration statement
			var my_var = expression;

	// Composición de acciones

		// Composición alternativa (conditional statements)
			// if statement
				if (true) {

				};
			// if else statement
				if (true) {

				} else{

				};
			// if elseif statement
				if (true) {

				} else if (true){

				}else{

				};
		// Composición iterativa
			// while statement
			// do / while statement
			// for statement
			// for in statement


		// Compound statements, empty statements or sub statements
			{

			}
		// switch statements

		// Jumps

			// labeled statement
			// break statement
			// continue statement
			// return statement
			// throw statement
			// try/cath/finally statement

	// miscellanius
		// with statement
		// debugger statement
		// use strict statement



/*ver tabla de sentences de David F. Javascript, The definitive Guide*/






