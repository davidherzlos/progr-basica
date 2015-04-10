




// Función constructora

function Mascota(n, v) {
	this.nombre = n;
	this.voz = v;
}
Mascota.prototype.hablar = function() {
	alert("Hola soy " + this.nombre + " soy de tipo " + this.constructor.name + " y puedo " + this.constructor.prototype.hablar.name);
};
var gato = new Mascota("murruño", "miauuu");
var perro = new Mascota("gorda", "guau");

// Varias formas de hacer un objeto

// Json
var perro = {
	nombre: "perriro",
	voz: "guau",
	hablar: function () {
		alert(this.voz);
	}
};

var perro Object.create(new Object());


var 


// Es importante el ámbito de las variables