
// Un closure en Javascript

function foo1(n) {
	function foo2(s) {
		return s + " " + n;
	}	
	return foo2;
}

david = foo1("David");
console.log(david("Hola"));