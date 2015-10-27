/*Buen ejemplo del esquema de búsqueda en una secuencia*/

// 	Variables
var palabras = ["uno", "dos", "tres", "cuatro"];
var palabraBuscada = prompt("Dame una palabra");
var i;
var encontrado;

// Preparar  secuencia
i = 0;
encontrado = false;

//Iniciar tratamiento (en este caso no aplica, pues no tratamos inicialmente nada)

// Mientras no sea fin de secuencia y no se haya encontrado en elemento
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

// Tratamiento Final
console.log("La palabra " + palabraBuscada + (encontrado == true ? " sí" : " no") + " existe en la secuencia");





/****Sin comentar****/

var palabras = ["uno", "dos", "tres", "cuatro"];
var palabraBuscada = prompt("Dame una palabra");
var i;
var encontrado;
i = 0;
encontrado = false;
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
console.log("La palabra " + palabraBuscada + (encontrado == true ? " sí" : " no") + " existe en la secuencia");