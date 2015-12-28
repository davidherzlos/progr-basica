var palabra;
function inicio () {
	// Se ejecuta cuando carga el dom
	
	// Banco de palabras y pistas
	var poolPalabras = [["Holanda", "Es un país de Europa"],
					 ["Antropología", "Es una ciencia"],
					 ["Kanguro", "Es un animal"],
					 ["Gas", "Señor Gritón"],
					 ["Gorra", "Objeto"],
					 ["Regla", "30cm"],
					 ["Blanco", "Color"],
					 ["Alberca", "Tiene agua"],
					 ["Corcho", "Material"],
					 ["Azul", "Color"],
					 ["Comepostres", "Apodo"]
					 ];

	// DOM element: pista
	var pista = document.getElementById('pista');

	// DOM element: imagen
	var imagenAhorcado = document.getElementById('imagen');

	// DOM element: botón
	var b = document.getElementById('boton');
	b.addEventListener('click', buscarLetra);

	// DOM element: letra
	var letra = document.getElementById('letra');

	// DOM element: casillas
	var casillas = document.getElementById('casillas');
	var casillasGuion ;


	// Cargar palabra aleatoria

	function generarPalabra () {
		word = poolPalabras[Math.floor(Math.random() * poolPalabras.length)];
		pista.innerText = word[1];
		casillasArray = new Array(word[0].length).fill("_");
		casillas.innerText = casillasArray.join('');
		console.log("Respuesta: " + word[0]);
		return word[0];
	};

	function reiniciarJuego(){
		intentos = 1;
		letra.value = "";
		palabra = generarPalabra();
		imagenAhorcado.src = "ahorcado-" + 1 + ".jpg";
	}

	var palabra = generarPalabra();


	// Intentos fallidos: cada uno ahorca
	var intentos = 1;


	// Buscar la letra, imprimirla y validar si ganaste
	function buscarLetra(){
		if(letra.value == ""){
			alert("Por favor introduce una letra");
		}
		
		var letraEncontrada = false;
		var i = 0;
		while(i <= palabra.length -1 && letra.value != ""){
			if(letra.value.toLowerCase() == palabra[i].toLowerCase()){
				letraEncontrada = true; 	
				casillasArray[i] = letra.value.toLowerCase();
				casillas.innerText = casillasArray.join('');
			}
			i++;
		}

		if(casillas.innerText.toLowerCase() == palabra.toLowerCase()){
			alert("Ganaste");
			reiniciarJuego();
		}

		// Ahorcar y validar si perdiste
		if(letraEncontrada == false && letra.value != ""){
			intentos++;
			imagenAhorcado.src = "ahorcado-" + intentos + ".jpg";
			imagen.onload = function(){			
				if(intentos == 6){
					alert("perdiste");
					reiniciarJuego();
				}
			}
		}

		letra.value = "";
	}
}
