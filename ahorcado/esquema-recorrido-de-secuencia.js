/*Encontrar los números divisores del número 32, exceptuando el 31 y 1*/

/* Usando while*/

function calcularDivisores(n) {
	var numero = n;
	var i = 2;
	var resultadoModulo;

	while(i < numero){
		resultadoModulo = numero % i;
		if(resultadoModulo == 0){
			console.log("El número " + i + " es divisor");
		}
		else{
		console.log("El número " + i + " no es divisor");
		}
		i++;
	}
}
bech code
calcularDivisores(32);



/*Usando for*/

function CalcularDivisor (n) {
	var numero = n;
	var resultadoModulo;
	var arregloNumeros = [];

	for (var i = (numero - 1); i > 1; i--) {
		resultadoModulo = numero % i;
		if(resultadoModulo == 0){
			console.log(i + " es divisor de " + numero);
			arregloNumeros.push(i);
		}
	};
	console.log("Los divisores de " + numero + " son: " + arregloNumeros);
}




