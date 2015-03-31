console.log('¡Hola!'); // Así namás



alert('No funciona aún');



// cuando se termina de cargar la etiqueta body: es una función de inicio

//function inicio () {
//	alert("Ya Funciona");
//	var c = document.getElementById('caja');
//	c.innerHTML += ' y <br><strong>Bye</strong> papá';
//
//}

// Todo esto es un muy buen ejemplo de scopes(ambito de variables) en javadcript, hay que uar singleton

var c, t, b;


// Como un document ready de jquery

function inicio () {
	alert("Ya Funciona");
	
	c = document.getElementById('caja');

	t = document.getElementById('alejandra');

	b = document.getElementById('botoncito');

	// con dos parametros, evento y función, acá la función no se escribe con ()
	b.addEventListener('click', calcularfor);




	// ciclo con while
	//var gritos = 50;
	
	//while(gritos > 0){

	//	c.innerHTML += "a";
	//	gritos--;
	//}
	//c.innerHTML += "iiiita";	




	// Un ciclo para imprimir pares del 0 al 50
	//var numero = 1;
	//while(numero <= 50){
	//	if(numero % 2 == 0){
	//		c.innerHTML += numero;
	//	}
	//	numero++;
	//}

}

// funcion calcular con while

function calcularwhile (){

	var numero = Number(t.value); //siempre hay que convertir a número en cajas de texto
	var calculo = 1; // donde se guarda el resultado
	var n = 1; //variable de iteración
	while(n <= numero){
		calculo = calculo * n;
		n++;
		c.innerHTML += ' ' + calculo;
	}
}

// funcion calcular con for

function calcularfor (){

	var numero = Number(t.value); //siempre hay que convertir a número en cajas de texto
	var calculo = 1;
	for (var n = 1; n <= numero; n++) {
		calculo *= n;
		c.innerHTML += ' ' + calculo;
	};
}