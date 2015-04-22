#Estructuras condicionales, selectivas, bifurcaciones, etc


# A menos qué, es como un if invertido
hambre = false

unless hambre
  puts "¡Estoy escribiendo programas de Ruby!"
else
  puts "¡Es hora de comer!"
end

#ruby

if true
	expresion
elsif true #ojo, no es elseif ni else if, es elsif
	expresion
else
	expresion
end

// js
if(true){
	
	Acción;

} elseif(true){

	Acción;

} else{

	Acción;
}
;








#Funcion contructora, clases, etc

# ruby
class Anfitrion 
	def iniciar (nombre = "a todos")
		@nombre = nombre
	end
	def saludar
		puts "Hola #{@nombre}"
	end
end

a = Anfitrion.new("David")


// javascript
function Anfitrion(n){
	this.nombre = n;
	this.saludar = function(){
		alert("Hola " +  n);
	}
}

var = new Anfitrion("David");


revisar diferencia entre encadenamiento de funciones y objetos, y funciones con parametros

