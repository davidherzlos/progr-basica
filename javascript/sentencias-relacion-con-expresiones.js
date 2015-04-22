/*Sentencias de expresion, son iguales que ciertas expresiones con efectos secundarios*/


	// Expresion statements (expresiones que cambian el entorno)

		//Function invocation
				foo(); // Pueden o no modificar el estado del entorno


		// Assigment expressions
			a = expression;


		// Otros casos: operadores que modifican el entorno

			//operator with side effects
			++
			--
			*=, +=, -=, etc
			
			//delete object expresion with side effects
			delete Object.property;
			
			// Invocation operator, function call operator
			(expresion);

/*Estas son la manera oficial de assigment expresion y function literal statement*/

	// Declaration statements

		// Funtion declaration statement
			function expresion (argument) {
				
			}

		// Variable declaration statement
			var my_var = expression;
