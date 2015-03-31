console.log('funciona JS');

// Variables globales, no precisamente una buena práctica


var tablero;

// variable fondo de notación json
var fondo = {
};


function funcionInicio () {
	console.log('Listo para dibujar');

	//Comenzamos

	// Obtener el canvas
	var canvas = document.getElementById("campo");
	
	//Obtener contexto del canvas
	tablero = canvas.getContext("2d");

	//Insertar la imagen de fondo

		//comprobar mi variable global fondo

	//crear la imagen agregando propiedades a fondo
	fondo.imagenURL = "fondo.png";
	fondo.imagen = new Image();
		//Comprobación
	console.log(fondo);

	//Cargar la imagen al atributo src de objeto imagen guardado en imagen
	fondo.imagen.src = fondo.imagenURL;
		//Comprobación
	console.log(fondo);

	//Insertar la imagen en el documento mediante un evento
	fondo.imagen.onload = dibujarFondo; //La función sólo se referencía, no debe llevar parántesis
}
function dibujarFondo () {
	// Esto agrega ahora sí la imagen
	tablero.drawImage(fondo.imagen, 0, 0); //Es una función propia de canvas
}