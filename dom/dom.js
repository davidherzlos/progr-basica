alert('funciona');

//Un objeto tiene variables y funciones
//DOM
document.write('hola');

var pi = 3.1416;
pi = Math.floor(pi);

var maxima;
maxima = Math.max(5,3,5,7,4,3);
document.write(maxima);




var lon, lat;

function mostrar(pos)
{
	document.write(pos.coords, lat + "," + pos.coords.lon);

}

var pos = navigator.geolocation.getCurrentPosition(mostrar);



