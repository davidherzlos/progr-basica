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

var palabra = "Tamarindo";
var hombre; 

// Declaración de la clase ahorcado

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






