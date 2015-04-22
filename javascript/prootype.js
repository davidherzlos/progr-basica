// There is 3 ways to create objects

	//// 1 Literal de Objeto o inicializador

	var objA = {
		prop_uno: "Hola",
		prop_dos: "mundo",
		prop_tres: function () {
			console.log(this.prop_uno + " " + this.prop_dos);
		}
	};

	//// 2 Método create de Object

	var objB = Object.create(new Object()); // Método poco usado

		// Se crean nuevas propiedades por asignacion
	objB.prop_uno = "Hola";
	objB.prop_dos = "mundo";
	objB.prop_tres = function (){
		console.log(this.prop_uno + " " + this.prop_dos);
	};


	//// 3 Función constructora

	function Obj(w1, w2) {
		this.prop_uno = w1;
		this.prop_dos = w2;
		this.prop_tres = function(){
			console.log(this.prop_uno + " " + this.prop_dos);
		};
	};

		// Luego creamos el objeto
	var objC = new Obj("Hola", "mundo");

		// Le hacemos algo al prototypo

	Obj.prototype.prop_heredada = "Hola otravez";



// Para ver operar los prototypes, sirve mejor la forma 3 apatir de una función constuctora
//El ejemplo C no hace tanta magia, solo es una función que asigna propieades en this. Se parece mucho a una class como en otros lenguajes, pero realmente no lo es, es solo una función que crea un objeto.

// Otra forma rara de crear un objeto
var myObject = function(name){
    this.name = name;
    return this;
};
