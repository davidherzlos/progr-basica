
console.log('funciona JS');

// Variables globales, no precisamente una buena práctica

var tablero;

// Objetos fondo, Diana y liz...

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false
};

var liz = {
};


function funcionInicio () {
	console.log('Listo para dibujar');

	// Obtener el canvas
	var canvas = document.getElementById("campo");
	//Obtener contexto del canvas
	tablero = canvas.getContext("2d");



	// definir la imagen agregando propiedades a fondo
	fondo.imagen = new Image();
		//Comprobación
		console.log(fondo);
	//Asignar la imagen al atributo src de objeto imagen
	fondo.imagen.src = fondo.imagenURL;
		//Comprobación
		console.log(fondo);
	// Ojo, aún no la hemos insertado en este punto, aquí aún no se ve la foto, sólo ocupa esta técnica, porque la carga de imágenes es un poco mas complicado
	// Este es un evento  IMPORTANTE!!
	fondo.imagen.onload = confirmarFondo; //La función se dispara cuando la imagen carga. La función sólo se referencía, no debe llevar parántesis

// Definir la imagen de tifis agregandole propiedades

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;


var m = document.getElementById("mover");
m.addEventListener("click", movimiento)

};

function confirmarFrente () {
	tifis.frenteOK = true;
	dibujar();
};


function movimiento() {
	tifis.x += 10;
	dibujar();
};





// Cuando la imagen es true, ahora si puedo dibujar, estamos confirmando el fondo
function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();

};

function dibujar () {
	// Esto agrega ahora sí la imagen, tres parámetros, imagen, posición.

	if (fondo.imagenOK == true) {
		tablero.drawImage(fondo.imagen, 0, 0); //Es una función propia de canvas
	};


	if (tifis.frenteOK == true) {
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	};
};














// Hay que volver a dibujar el osito
// Guardar las propiedades del osito en un objeto
// Volver a dibujar el fondo y

// Volver a dibujr el osito
// Cada movimiento implica dibujar todo
// Es como flash y sus fotogramas!!!
// Afortunadamente se arregla con funciones
