//Esta es una propiedad del texto del tipo de objeto String, no es un método

"David".length

// Matemáticas

3 + 4

// Mas de los números

40 * 5
30 / 3

// Esto dará un errr, pues estoy evaluando un identifier (variable), que no está definido en el entorno previamente

minombre

// This is a comment that the computer will ignore. 
// It is for your eyes only!
"cake".length

//Un ejemplo de un método del objeto global o una función global que hace algo en el dom.

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');


// Also try the Q&A forum to get help
// The link is on the bottom left of the page!

confirm("Estamos listos");

// Otra función global o método del objeto global
prompt("Cuantos años tienes");

// Mas ejercicios

"UN string de 3 palabras".length;

//Estoy codeando una expresión, en sentido estricto no es ya un literal, ahora es una expresión de acceso a propiedad, pues length es propiedad del objeto Number, y con el resultado haciendo una comparación relacional entre 2 numeros.

"I'm coding like a champ".length > 10;

//Aprendiendo console.log
console.log(2 * 5);
console.log("Hello");

//Operaciones de varios tipos con objetos de varios tipos

// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length == 8);
console.log("Goody Donaldson".length ==  15);
console.log(8*2 == 16);

//Empezamos con la composicion selectiva de acciones, o mejor dicho, la sentencia if, se le considera una sentencia porque cambia el rumbo del programa. Esta es la de tipo simple

if ("David.Antonio".length > 7 ) {
    console.log("You have a long name");
}

// Esta es la de tipo doble alternativa
if ("David".length > 809 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    console.log("You have a short name");
}
    

// Mi condicion debe evaluar a falso
// Es una sentencia if que valida adentro de una paréntesis de invocacion la expresión formada por una invocacio de un método de random de un objeto Math, que una vez generado, se compara con un literal numerico
if(Math.random() > 1.5){
    console.log("The condition is true");
} else{
    console.log("The condition is false");
}

// Primero gramática básica, luego poesía

// The computer doesn't worry about extra spaces between words or brackets
// It just cares about the order of where things are placed
// and that you have used the right characters (){}[]"";

// For extra help, a program called a 'linter' is checking your code
// and will put a red 'x' next to the first line that contains errors

if (10 == 10) {
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}

// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

//El paréntesis es un operador de invocacióny se puede usar para los condiciones, loops, y orden de la soperaciones 
 
if ("Jon".length * 2 / (2+1) === 2 )
{
    console.log("The answer makes sense!");
} 
else {
    console.log("Error Error Error");
}

// Operadorcito módulo
// Below is an example of printing the remainder of 18/4 using modulo:

console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

//An example of an if/else statement with modulo in the condition



if( 47 % 4 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

//El uso de substring, un método que aplica a todos los valores de tipo string pertenecientes al Objeto String

// Be careful with the substring's letter positions!


"wonderful day".substring(3,7);

// Porfavor notar que el console de este substring tiene adentro una invocacion de un metodo, sin ;, parece que no puede haber sentencias dentro de sentencias IMPORTANTE

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));

// Porfavor notar que el console de este substring tiene adentro una invocacion de un metodo, sin ;, parece que no puede haber sentencias dentro de sentencias IMPORTANTE

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));


// Para las variables se usa un keyword llamado var y se hace una expresión de asignación, el var le da el estatus de acción o sentencia, pues modifica el estado del entorno creando un nuevo valor. El estilo es var myVar;

// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:

var myAge = 29;
console.log(myAge);

// Las variables solo son cajones o nombres simbólicos. Contienen una expresión.

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "México";

// Use console.log to print out the length of the variable myCountry.
console.log( myCountry.length );

// Use console.log to print out the first three letters of myCountry.
console.log( myCountry.substring(0,3));


// On line 2, declare a variable myName and give it your name.
var myName = "David"; // Hago una sentencia de declaracion de variable, que se compone de una expresión de asignacion
// On line 4, use console.log to print out the myName variable.
console.log(myName); //Invoco un método para imprimr la variable
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = "David".substring(0,2); // Hago una expresión de asignacion para modificar la variable, es una expresión de asignación o una sentencia de expresión.
// On line 9, use console.log to print out the myName variable.
console.log(myName);


var myColor = "blue";
console.log(myColor.length);


// Not sure where to begin? Check the Hint!
if(true){
    console.log("I finished my first course!");
    
}else{
 console.log("No he terminado");   
}

