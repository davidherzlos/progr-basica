alert("fuera");

var dibujo, lienzo, t, b;

function inicio () {

	alert('dentro');

	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");

	b.addEventListener("click", dibujarGrilla);


	//A dibujar usn canvas: el canvas es sólo el plano, pero no se dibuja sobre el área entera, sino sobre el eje de coordenadas, se llama contexto.

	dibujo = document.getElementById('dibujito'); //obtener el elemento html canvas
	lienzo = dibujo.getContext("2d"); //obtener el contexto bidimensional(eje de coordenadas del canvas)

	//dibujarGrilla(lienzo); // ver qué pasa si cambias hacia arriba esta invocación, se supone que no hizo hoisting

	//lienzo.moveTo(0,0); //Moverse a 0,0
	//lienzo.lineTo(300,0); //Linea hasta 300,0
	//lienzo.lineTo(300,300); //Linea hasta 300,300
	//lienzo.lineTo(0,300); //Linea hasta 0,300
	//lienzo.lineTo(0,0); //Linea hasta 0,0
	//lienzo.stroke();
	//lienzo.strokeStyle = "#F00"; //Se trabaja en hexadecimal

	// Para dibujar un círculo
	lienzo.beginPath(); // Comenzar trazo
	lienzo.strokeStyle = "#00F"; //Se trabaja en hexadecimal
	lienzo.arc(150,150,100, (Math.PI * 2), false ); // un arco con parámetros: centro(coordenadas), radio, radianes y sentido del trazo 
	lienzo.closePath(); // Terminar trazo
	lienzo.stroke(); // Pintar

}
// Analizar, es un buen ejemplo de ciclo for
function dibujarGrilla (pony) {
		var pony = lienzo;
		var rayas = Number(t.value); //Conversion
		var ancho = 300, alto = 300;
		var linea, punto;
		var anchoLinea = ancho / rayas;
		var altoLinea = 20;
		var limiteX = ancho / anchoLinea;
		var limiteY = alto / anchoLinea;

		pony.strokeStyle = "#AAA";

		for (linea = 0; linea <= limiteX; linea++) { // La condición siempre es un mientras, no un hasta
			punto = linea * anchoLinea;
			pony.beginPath();
			pony.moveTo(punto, 0);
			pony.lineTo(punto, alto);
			pony.stroke();
			pony.closePath();
		};		

		for (linea = 0; linea <= limiteY; linea++) { // La condición siempre es un mientras, no un hasta
			punto = linea * anchoLinea;
			pony.beginPath();
			pony.moveTo(0, punto);
			pony.lineTo(alto, punto);
			pony.stroke();
			pony.closePath();
		};

	}


