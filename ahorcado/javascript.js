
var palabraFormada = [];
var palabra;
function inicio () {
	
	// Banco de palabras y pistas
	var poolPalabras = [["Holanda", "Es un país de Europa donde se hace queso de bola"],
					 ["Antropología", "Es una ciencia que se enseña en la ENHA"],
					 ["Kanguro", "Es un animal australiano que usa guantes de box"],
					 ["Gas", "¿Qué vende el señor gritón de la mañana?"],
					 ["Gorra", "Siempre se le rompe a Faby en la alberca"],
					 ["Regla", "Mide 30cm"],
					 ["Blanco", "Color que reune todos los colores"],
					 ["Alberca", "Tiene mucho cloro"],
					 ["Corcho", "El material de las tapas del vino"],
					 ["Azul", "Color del mar del caribe"],
					 ["Como postres", "Apodo de la Faby"]
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



	// Cargar palabra aleatoria

	function generarPalabra () {
		word = poolPalabras[Math.floor(Math.random() * poolPalabras.length)];
		pista.innerText = word[1];
		return word[0];
	};

	function reiniciarJuego(){
		intentos = 1;
		palabraFormada = [];
		letra.value = "";
		palabra = generarPalabra();
		casillas.innerText = "";
		imagenAhorcado.src = "ahorcado-" + 1 + ".jpg";
			console.log("La palabra aleatoria es: " + palabra);
	}

	var palabra = generarPalabra();
	
	console.log("La palabra aleatoria es: " + palabra);



	var intentos = 1;





	// Buscar la letra, imprimirla y validar si ganaste
	function buscarLetra(){
		
		var letraEncontrada = false;
		var i = 0;
		while(i <= palabra.length -1){
			if(letra.value == palabra[i]){
				
				letraEncontrada = true; 
				palabraFormada[i] = letra.value;
				palabraFinal = palabraFormada.join('');
				console.log(palabraFinal);
				casillas.innerText = palabraFinal;
				letra.value = "";
				
				if(palabraFinal == palabra){
					alert("Ganaste");
					reiniciarJuego();
				}
			}
			i++;
		}
		// Ahorcar y validar si perdiste
		if(letraEncontrada == false){
			intentos++;
			imagenAhorcado.src = "ahorcado-" + intentos + ".jpg";
			imagen.onload = function(){			
				if(intentos == 6){
					alert("perdiste");
					reiniciarJuego();
				}
			}
		}

	}
}
