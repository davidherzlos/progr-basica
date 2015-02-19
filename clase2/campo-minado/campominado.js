
prompt("Estas en un campo minado\n Elige una posición entre el y el 2 para X y para Y");

//funciones

function explosion(){
	alert("Boommmmm");
	document.write("<h1>Elegiste una área minada</h1>");
}

function ganaste(){
	document.write("Eres un ganador :)");
}

// 1 = Bomba. 0 = No hay Bomba.

// Esto es el equivalente a un archivo

var campo = [ [1, 0, 0], 
              [0, 1, 0], 
              [1, 1, 1] ];

if(campo[1][0] == 1){
	explosion();
} 
else{
	ganaste();
}
