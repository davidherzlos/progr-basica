console.log('Funciona el código JS');

// Variables globales, no precisamente una buena práctica

var tablero, direccion;

var ascii = [38, 40, 37, 39];

var tecla = {
	up: ascii[0],
	down: ascii[1],
	left: ascii[2],
	right: ascii[3]
};

// Fondo, Tifis(Diana) y liz...

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	atrasURL: "diana-atras.png",
	izquierdaURL: "diana-izq.png",
	derechaURL: "diana-der.png",
	frenteOK: false,
	atrasOK: false,
	derechaOK: false,
	izquierdaOK:false
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
};


function funcionInicio () {
	console.log('Una vez que el DOM cargó');

// Obtener el canvas
    var canvas = document.getElementById("campo");
	//Obtener contexto del canvas
	tablero = canvas.getContext("2d");

// definir la imagen agregando un nuevo objeto de imagen
	fondo.imagen = new Image();
		//Comprobación
		console.log(fondo);
	//Asignar la url de la imagen a la imagen recien creada
	fondo.imagen.src = fondo.imagenURL;
		//Comprobación
		console.log(fondo); // Sólo comprobamos que el objeto ya está listo para poder operar sobre el

	// Ojo, aún no la hemos insertado en este punto, aquí aún no se ve la foto
	// Este es un evento  IMPORTANTE!! Necesitamos estar seguros de que la imagen cargó
	fondo.imagen.onload = confirmarFondo; //La función se dispara cuando la imagen carga. La función sólo se referencía, no debe llevar parántesis

// Definir la imagen de tifis agregandole propiedades

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;


	tifis.izquierda = new Image();
	tifis.izquierda.src = tifis.izquierdaURL;
	tifis.izquierda.onload = confirmarIzquierda;


	tifis.derecha = new Image();
	tifis.derecha.src = tifis.derechaURL;
	tifis.derecha.onload = confirmarDerecha;



// Definir la imagen de liz agregandole propiedades

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

// Vamos a añardir un evento para disparar una función al apretar una tecla del teclado

	document.addEventListener("keydown", capturarFlecha);



};

// Las funciones llamadas si el evento onload ocurre:

function confirmarLiz () {
	liz.lizOK = true;
	dibujar();
};

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();

};

function confirmarAtras () {
	tifis.atrasOK = true;
}

function confirmarFrente () {
	tifis.frenteOK = true;
	dibujar();
}

function confirmarIzquierda () {
	tifis.izquierdaOK = true;
}

function confirmarDerecha () {
	tifis.derechaOK = true;
}

function capturarFlecha (keypressed) { // Esto está muy raro, debes investigar cómo son las funciones oara saber qué pasó aquí
	// Guardar en código la tecla oprimida
	
	var tecla_elegida = keypressed.keyCode;
	
	dibujar(tecla_elegida);
};


function dibujar (tecla_elegida) {
	// Esto agrega ahora sí la imagen, tres parámetros, imagen, posición.

	// Capa 1
	if (fondo.imagenOK == true) {
		tablero.drawImage(fondo.imagen, 0, 0); //Es una función propia de canvas
	};

	// Capa 2
	if (liz.lizOK == true) {
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	};
	
	// Capa 3
	var tifisDibujo = tifis.frente;

	if (tifis.frenteOK && tifis.atrasOK && tifis.derechaOK && tifis.izquierdaOK) {

		if (tecla_elegida == tecla.up){
			tifis.y -= 10;
			tifisDibujo = tifis.atras;
		}
		if (tecla_elegida == tecla.down){
			tifis.y += 10;
			tifisDibujo = tifis.frente;
		}
		if (tecla_elegida == tecla.left){
			tifis.x -= 10;
			tifisDibujo = tifis.izquierda;
		}
		if (tecla_elegida == tecla.right){
			tifis.x += 10;
			tifisDibujo = tifis.derecha;
		}
	}
	
	tablero.drawImage(tifisDibujo, tifis.x, tifis.y);
};


// Hay que volver a dibujar el osito
// Guardar las propiedades del osito en un objeto
// Volver a dibujar el fondo y

// Volver a dibujr el osito
// Cada movimiento implica dibujar todo
// Es como flash y sus fotogramas!!!
// Afortunadamente se arregla con funciones
