// Variables globales

var tablero;
var posicion = [ "atras", "frente", "izq", "der" ];
var rumbo;
var fondo;
var tifis;
var liz;
var direccion;
var	posicionX = 100;
var	posicionY = 100;
var tecla = {
	up: 38,
	down: 40,
	left: 37,
	right: 39
};

// Constructor de fondo
function Fondo () {
	this.URL = "fondo.png";
	this.OK = false;
	this.imagen = new Image();
	this.imagen.src = this.URL;
	this.x = 0;
	this.y = 0;
	this.dibujar = function(){
		this.OK = true;
		if (this.OK == true) {
		tablero.drawImage(fondo.imagen, 0, 0);
		};
	};
};

// Constructor de Tifis
function Tifis (postura) {

	this.URL = "diana-" + postura + ".png";
	this.OK = false;
	this.imagen = new Image();
	this.imagen.src = this.URL;
	this.dibujar = function(){
		this.OK = true;
		if (this.OK == true) {
		tablero.drawImage(tifis.imagen, tifis.x, tifis.y);
		};
	};
};

// Constructor de Liz
function Liz () {

	this.URL = "liz.png";
	this.OK = false;
	this.imagen = new Image();
	this.imagen.src = this.URL;
	this.x = 400;
	this.y = 300;
	this.dibujar = function(){
		this.OK = true;
		if (this.OK == true) {
		tablero.drawImage(liz.imagen, liz.x, liz.y);
		};
	};
};

// Dibujar todos los canvas
function renderDibujo (rumbo) {

    var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	
	fondo = new Fondo();
	
	tifis = new Tifis(rumbo || "frente");
	Tifis.prototype.x = posicionX;
	Tifis.prototype.y = posicionY;
	
	liz = new Liz();
	
	fondo.imagen.onload = fondo.dibujar;
	tifis.imagen.onload = tifis.dibujar;
	liz.imagen.onload = liz.dibujar;

};

//Escuchar cuando el usuario persiona la tecla
document.addEventListener("keydown", capturarFlecha);

// Determinar rumbo para que tifis avance
function capturarFlecha (keypressed){ // Averiguar porqué pude acceder a un parámetro que no se que es

	tecla.presionada = keypressed.keyCode;

	if (tecla.presionada == tecla.up) {
		posicionY -= 10;
		rumbo = posicion[0];
	};
	if (tecla.presionada == tecla.down) {
		posicionY += 10;
		rumbo = posicion[1];
	};
	if (tecla.presionada == tecla.left) {
		posicionX -= 10;
		rumbo = posicion[2];
	};
	if (tecla.presionada == tecla.right) {
		posicionX += 10;
		rumbo = posicion[3];
	};
	renderDibujo(rumbo);
};