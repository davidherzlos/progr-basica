// Buen ejemplo de esquema de búsqueda en una secuencia

var palabras = ["uno", "dos", "tres", "cuatro"];
var palabraBuscada = prompt("Dame una palabra");
var i = 0;
var encontrado = false;
while(i <= palabras.length -1 && encontrado == false){


	if (palabraBuscada == palabras[i]) {
		console.log("Palabra encontrada en la posición " + i + " con valor: " + palabras[i]);
		encontrado = true;
	};
	if(encontrado == false){
		console.log("Palabra NO encontrada en la posición " + i + " con valor: " + palabras[i]);
		i++;
	}

}


// COMENTADA

// Datos de entrada
var palabras = ["uno", "dos", "tres", "cuatro"];
var palabraBuscada = prompt("Dame una palabra");

// Preparar  secuencia
var i = 0;

// Encontrado igual a falso
var encontrado = false;

// Mientras no sea fin de secuencia y no se haya encontrado
while(i <= palabras.length -1 && encontrado == false){

	//Actualizar encontrado
	if (palabraBuscada == palabras[i]) {
		console.log("Palabra encontrada en la posición " + i + " con valor: " + palabras[i]);
		encontrado = true;
	};

	// Si no encontrado, tratar elemento y avanzar en secuencia
	if(encontrado == false){
		console.log("Palabra NO encontrada en la posición " + i + " con valor: " + palabras[i]);
		i++;
	}

}
