# Todas las funciones incorporadas son builtin oses que viven en builtin, las definidas viven en __main__ y las importadas viven en el namespace de su modulo

# Lo demas tambien vive en alguno de los namespaces anteriores. 


x = 10
y = "Hola"

def funcion1():
	# Entorno, namespace o scope enclosed

	print("Mi valor en funcion1 es:", x, y)
	pass

	def funcion11():
		print("Mi valor en funcion11 es:", x, y)
		pass

		def funcion111():
			print("Mi valor en funcion111 es:", x, y)
			passp

print(x, y)

funcion1()
