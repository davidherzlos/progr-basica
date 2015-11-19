// Traduce una frase a Pyg Latin

// Variables

var frase = prompt("Introduce tu frase: ");
var palabras = frase.split(" ");  // El array de palabras se crea
var frasePigLatyn = [];
var traduccion;
var word = "";
var first = "";
var newWord = "";

// Una vez obtenidas las palabras en [], tratamos cada una para aplicarle su traduccion

for (var i = 0; i <= palabras.length -1; i++) {
	if (palabras[i].length > 0 && typeof palabras[i] == 'string'){
		word = palabras[i].toLowerCase();
		first = word[0];
		newWord = word + first + 'ay';  // Se aplica el sonido de cerdito
		newWord = newWord.slice(1, newWord.length);
		traduccion = traduccion + newWord + " ";
	}
}
// Se imprime la traduccion final

alert("Tu traduccion a Pyg Latin es: " + traduccion); 

