
// Un contructor de objetos en ES6

class Mujer{
	"use strict";
	constructor(nombre, cabello){
		this.nombre = nombre;
		this.cabello = cabello;

		this.presentarse = function () {
			alert(this.nombre + this.cabello);
		}
	}
}
var fab = new Mujer("Fabiola Flores", "Negro");
