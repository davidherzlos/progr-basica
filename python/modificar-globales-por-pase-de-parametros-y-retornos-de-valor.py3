varglobal = "David"

def poner_apodo(n):
	nombre = n
	print("Aquí n se llama", nombre)


	def ahora_si(nom):
		apodo = nom + "-idcillo"
		return apodo
		pass

	return ahora_si(nombre)
	pass

varglobal = poner_apodo(varglobal)
print(varglobal)



