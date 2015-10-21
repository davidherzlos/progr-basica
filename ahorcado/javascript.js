/*
	Dibujar el poste
	Determinar la palabra
	Cargar elementos de la persona
		Cabeza
		torso
		brasos
		pies
		ojos de ahorcado
	Elegir las letras
		Si la letra existe
			se imprime Letra donde corresponde
		SI no
			Agrega elemento al ahorcado
		Si ya se dibujaron todos los elementos del ahorcado
			perdí
		Si se imprimieron todas las letra de mi palabra
			Gané
*/

var palabraFormada = [];

// Función de inicio
function inicio () {

	var palabra = "Holanda";
	var b = document.getElementById('boton');

	var letra = document.getElementById('letra');

	b.addEventListener('click', buscarLetra);

	function buscarLetra(){
		var letraEncontrada = false;
		var i = 0;
		while(i <= palabra.length -1){
			if(letra.value === palabra[i]){
				letraEncontrada = true;
				palabraFormada[i] = letra.value;
			}
			i++;
		}
		palabraFinal = palabraFormada.join('');

		if (palabraFinal == palabra){
			alert("Ganaste " + palabraFinal);
		}else{
			alert("Aún no ganas");
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
