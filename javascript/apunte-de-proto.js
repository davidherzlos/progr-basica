
function Constructor (p1,p2,p3,p4) {
	this.prop1 = p1;
	this.prop2 = p2;
	this.prop3 = p3;
	this.prop4 = p4;
}

var instance = new Constructor("una", "dos", "tres", "cuatro");

var instance = Constructor.new("una", "dos", "tres", "cuatro");

Object

Object.class_name.prototype.method_name = function(first_argument) {
	// body...
};

class_name.prototype.method_name = function(first_argument) {
	// body...
};

prototype.class_name.prototype.method_name = function(first_argument) {
	// body...
};

// Las funciones tienen una propiedad prototype
