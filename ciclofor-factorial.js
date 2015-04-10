var numero = prompt("Dame un número");

function fact(n) 
{
	var temporal = n;
	while(n-- > 2){
		temporal *= n;
		console.log(temporal);
	}
	return temporal;
}
fact(numero);
