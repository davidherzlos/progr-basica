var juego; // Creamos una variable que va a contener un objeto

// Asignamos los datos al objeto

var juego = {
	"piedra": 0,
	"papel": 1,
	"tijera": 2,
	"Opciones": ["Piedra", "Papel", "Tijera"],	
// Se crea el método jugar	

	"jugar": function(){
		var eleccion;
		do{
			eleccion = window.prompt("¿Desea Jugar? \n Sí: s \n No: n");
			if (eleccion != "s"){
				if(eleccion != "n"){
					window.alert("No ha contestado correctamente");
					return eleccion;
				}
			}
		} 
		while(elección != "s" && eleccion != "n" && eleccion == undefined);
		
		if(eleccion == "s"){
			function patito(minimo, maximo){
				var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
				return numero;
			}
		}
		juego.OpcionMaquina = juego.jugar.patito(0,2);
		juego.OpcionUsuario = window.prompt("¿Cual eliges:? \n 0: Piedra \n 1: Papel ó \n 2: Tijeras");
		window.alert("Elegiste: " + juego.Opciones[juego.OpcionUsuario]);
		window.alert("La máquina eligió: " + juego.Opciones[juego.OpcionMaquina]);
		if (juego.OpcionUsuario == piedra){
			if (juego.OpcionMaquina == piedra){
				window.alert('Empate');
			}
			else if (juego.OpcionMaquina == papel){
					window.alert('Perdiste');
				}
				else if(juego.OpcionMaquina == tijera){
					window.alert('Ganaste');
				}
			}
			else if (juego.OpcionUsuario == papel){
				if (juego.OpcionMaquina == papel){
					window.alert('Empate');
				}
				else if (juego.OpcionMaquina == tijera){
					window.alert('Perdiste');
				}
				else if(juego.OpcionMaquina == piedra){
					window.alert('Ganaste');
				}
			}
			else if (juego.OpcionUsuario == tijera){
				if (juego.OpcionMaquina == tijera){
					window.alert('Empate');
				}
				else if (juego.OpcionMaquina == papel){
					window.alert('Ganaste');
				}
				else if(juego.OpcionMaquina == piedra){
					window.alert('Perdiste');
				}
				else{
					window.alert('¿Qué pedo?');
				}	
			}
			
		}
		else{
			window.alert("Ya será para la próxima");
		}
	}
}



			
			


