/*
	YDibujar el poste
	N Determinar la palabra
	Y Cargar elementos de la persona
	Y	Cabeza
	Y	torso
	Y	brasos
	Y	pies
	Y	ojos de ahorcado
	YElegir las letras
	Y	Si la letra existe
	Y		se imprime Letra donde corresponde
	Y	SI no
	Y		Agrega elemento al ahorcado
	Y	Si ya se dibujaron todos los elementos del ahorcado
	Y		perdí
	Y	Si se imprimieron todas las letra de mi palabra
	Y		Gané
*/
var poolPalabras = [["Holanda", "Es un país de Europa"],
				 ["Antropología", "Es una ciencia que se da en la ENHA"],
				 ["Kanguro", "Es un animal australiano"],
				 ["Gas", "¿Qué vende el señor gritón de la mañana?"],
				 ["Gorra", "Siempre se le rompe a Fay en la alberca"],
				 ["Regla", "Mide 30cm"],
				 ["Blanco", "Color que reune todos los colores"],
				 ["Alberca", "Tiene mucho cloro"],
				 ["Corcho", "El material de las tapas del vino"],
				 ["Azul", "Coor del mar"],
				 ["Python", "Lenguaje de programación inspirado en unos comediantes"]
				 ];

var palabraFormada = [];

// Función de inicio
function inicio () {

	var intentos = 1;
	var palabra = "";

	// Determinar palabra e imprimirla en documento
	
	function getPalabra () {
		palabra = poolPalabras[Math.floor(Math.random() * poolPalabras.length)];
	}

	// DOM elements

	var textoenDoc = document.getElementById('palabra');
	var imagenAhorcado = document.getElementById('imagen');
	var b = document.getElementById('boton');
	var letra = document.getElementById('letra');
	b.addEventListener('click', buscarLetra);

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
				if(palabraFinal == palabra){
					alert("Ganaste");
					palabraFormada = [];
					letra.value = "";
					// Aquí hace falta cargar una nueva palabra
				}
			}
			i++;
		}
		// Ahorcar y validar si perdiste
		if(letraEncontrada == false){
			intentos++;
			imagenAhorcado.src = "ahorcado-" + intentos + ".jpg";
			if(intentos == 6){
				alert("perdiste");
			}
		}

	}
}


// Declaración de la clase ahorcado
/*
var Ahorcado = function(con){
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
};

function inicio () {
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
};

*/
