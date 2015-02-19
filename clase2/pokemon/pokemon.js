
alert('Hola, este es un alert antes del DOM Content Loaded');

function Pokemon(n,v,a,g){
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function(){
		alert(this.grito);
	}
}

/*
function iniciar(){

	var david = new Pokemon("David",100,50,"Orale cabrón");
	var daniel = new Pokemon("Daniel",100,50,"Hay mamachita");
}
*/


var david = new Pokemon("David",80,50,"Orale cabrón");
var daniel = new Pokemon("Daniel",70,60,"Hay mamachita");



function assignvaluesDavid(){

	objeton.textContent = david.nombre;
	objetov.textContent = david.vida;
	objetoa.textContent = david.ataque;
	objetog.textContent = david.grito;
	objetoimg1.src = "1.jpg";
}

function assignvaluesDaniel(){

	objeton.textContent = daniel.nombre;
	objetov.textContent = daniel.vida;
	objetoa.textContent = daniel.ataque;
	objetog.textContent = daniel.grito;
	objetoimg1.src = "2.jpg";
}