/*Orientación a objetos con Prototipos*/

// Los prototipos son un aspecto importante de las funciones, ni siquiera de los objetos

// La primer cuestion que debemos considerar para el tema del prototype, es que siempre hay funciones constructoras que funcionan como classes sin realmente serlo y permiten instanciar objetos. Definen propiedades y métodos que serán aplicados a las nuevas instancias.

// Por lo tanto, podemos decir que tenemos variables y métodos de clase(función constructora), y variables y métodos de instancia (Objetos creados por la primera). IMPORTANTE

//El prototipo es una propiedad de las funciones constructoras, que nos permite acceder a las propiedades y métodos de clase, que van a heredar todos los objetos, inclusive los ya existentes.

// Una vez que definimos propiedades al prototipo, que a su vez es una propiedad, esas propiedades son heredadas a todos los objetos instanciados


	// Un array al margen del ejemplo

	var generos = ["Hombre", "Mujer"];

// Función constructora (clase), se usa this
function Ninja(n,e){
	this.nombre = n;
	this.edad = e;
};

// Objeto instanciado, se usa new y la función constructora.
var ninja1 = new Ninja("David", 30);

// Lo importante aquí es que todo lo que se diga en una propiedad prototype de una función será heradado y servirá como arquitectura para los objetos, inclusive los ya creados

// Todas las funciones tienen la propiedad prototype
Ninja.prototype.genero = generos[0];

console.assert(ninja1.genero === true, "La propiedad heredada existe");


// Hay dos formas de acceder al prototype

	// 1
	ninja1.constructor.prototype

	// 2
	ninja1.__proto__

	// Objetos callables, valgame dios