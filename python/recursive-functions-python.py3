# Una funcion recursiva

contador = 1

def foo(texto):

	global contador
	print("Invocacion de foo #: " + str(contador))
	contador = contador + 1

	if len(texto) >= 10:
		return "Se acabo la recursion: " + texto + " mide 5 caracteres"
	print("texto vale: " + texto)
	
	return foo(texto + "a") + "\n" + texto + " a ver si es cierto \n"
print( foo("H") )
print("Despues de la recursion, mi varible global contador vale: " + str(contador))