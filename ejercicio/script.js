function iniciar(){

	//Guardar los datos del form y procesarlos
	var ingles = document.getElementById("eningles");
	var frances = document.getElementById("enfrances");
	var italiano = document.getElementById("enaleman");
	
	// Eventos para los botones
	ingles.addEventListener("click", decirEnIngles);
	frances.addEventListener("click", decirEnFrances);
	italiano.addEventListener("click", decirEnAleman);

	function decirEnIngles() {
		
		//Guardar los valores del form

		// traer los valores del html
		var n = document.getElementById("inombre");
		var p = document.getElementById("iprofesion");
		var e = document.getElementById("iedad");
		var i = document.getElementById("iidioma");
		var pr = document.getElementById("presentacion");
		
		//Crear la estructura del objeto del form

		function Persona(n,p,e,i){
			this.nombre = n;
			this.profesion = p;
			this.edad = e;
			this.idioma = i;
			this.presentarse = function(){
				pr.innerHTML = "Hello. I'm " + this.nombre.value + " and i'm a " + this.profesion.value + ". I'm " + this.edad.value + " years old and my favorite language is " + this.idioma.value;
			}
		}

		//crear la instancia e imprimir los datos

		var unaPersona = new Persona(n,p,e,i);
		unaPersona.presentarse();
	}
	function decirEnFrances() {
		
		//Guardar los valores del form

		// traer los valores del html
		var n = document.getElementById("inombre");
		var p = document.getElementById("iprofesion");
		var e = document.getElementById("iedad");
		var i = document.getElementById("iidioma");
		var pr = document.getElementById("presentacion");
		
		//Crear la estructura del objeto del form

		function Persona(n,p,e,i){
			this.nombre = n;
			this.profesion = p;
			this.edad = e;
			this.idioma = i;
			this.presentarse = function(){
				pr.innerHTML = "Salut. Je m'appelle " + this.nombre.value + " et je suis " + this.profesion.value + ". J'ai " + this.edad.value + " et ma langue préféré c'est " +  this.idioma.value;
			}
		}

		//crear la instancia e imprimir los datos

		var unaPersona = new Persona(n,p,e,i);
		unaPersona.presentarse();
	}
	function decirEnAleman() {
		
		//Guardar los valores del form

		// traer los valores del html
		var n = document.getElementById("inombre");
		var p = document.getElementById("iprofesion");
		var e = document.getElementById("iedad");
		var i = document.getElementById("iidioma");
		var pr = document.getElementById("presentacion");
		
		//Crear la estructura del objeto del form

		function Persona(n,p,e,i){
			this.nombre = n;
			this.profesion = p;
			this.edad = e;
			this.idioma = i;
			this.presentarse = function(){
				pr.innerHTML = "Hallo, Ich heisse " + this.nombre.value + " und ich arbeite als " + this.profesion.value + ". Ich bin " + this.edad.value + " Jahre alt und meine Lieblingssprache ist " + this.idioma.value;
			}
		}

		//crear la instancia e imprimir los datos

		var unaPersona = new Persona(n,p,e,i);
		unaPersona.presentarse();
	}

}