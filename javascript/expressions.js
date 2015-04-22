/*Una expresion:
	Lo que el inteprete evalua a un nuevo o conocido valor
	Cualquier combinación de operadores y operandos
	Las expresiones tienen sintaxis
	Generalmente no modifican en estado del entorno, sólo en algunas expcepciones señaladas
	Casi siempre aparecen a la derecha
	Las expresiones pueden apareer donde sea que se espere un valor

	cuando algo modifica el entorno, creo que debe modificar el entorno global

	Donde sea que puedas escribir un statement también puedes escribir un expresion, en cambio no puedes escribir un statement donde sea que se espere escribir un expresion
*/

//Todo lo anterior es un "expresion"

//Lvalue expressions

	//Expresiones primarias

		//Literals

			1 //Number literal
			mynombre // An identifier
			true // A reserved word
			/pattern/ // A Regepx
			"Cadena de caracteres" // String literal

	// Expresiones complejas, involucran al menos a un operador y pueden contener sub expresiones

			// Expresiones, arritmeticas, relacionales, de comparacion, logicas, de concatenacion, con operadores unarios y con posibles efetos secundarios

				1 + 3
				2 > 0
				2 == 4
				2 === 5
				true == 0
				"Hola" + "mundo"
				++1 // OPerador con side effects
				--2 // OPerador con side effects
				2-- // OPerador con side effects
				1++ // OPerador con side effects
				true || false
				false && false
				true ? "Hola": "Adios"
				(expresion)

			//Function definition expresion, Array, and Object literals o initializers

				//function definition expresion (function literal)
					function () {
						"Hello";
					}

				//Object literal
					{
						x: 1,
						y: 2
						z: function () {
							123123;
						}
					}

				//Array literal
					[0,1,2,"tres",true,myvar]
			// Function Invocation and Object and Array property access expressions

				//Function invocation expression
					foo() // Pueden o no modificar el estado del entorno

				//Array property access expression
					a = ["Hola",2]
					a[1]
				//Object property access expression
					b = {
						x: 1,
						y: 2,
						z: function() {
							"Hello";
						}
					}
					b.x
					b.y
					b.z
					b.z()
			// Object creation
				new Object()
			// Delete object property
				delete Object.property // Tiene side effects. Podría considerarse como un operador cque cambia el entorno y por lo tanto un poco sentencioso

// Assigment expressions
	a = // Any lvalue expression // tambien modifican el estado del entorno STATEMENT


//Ver el modelo de expresiones de crockfort










