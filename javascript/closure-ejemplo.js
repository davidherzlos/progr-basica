function inicia() {
  var nombre = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia'
  function muestraNombre() { // 'muestraNombre' es una función interna (un closure)
    alert(nombre); // dentro de esta función usamos una variable declarada en la función padre
  }
  muestraNombre();
}
inicia(); 


function creaFunc() {
  var nombre = "Mozilla";
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc(); 