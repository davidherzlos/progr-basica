# Traduce una frase a Pyg Latin

# Variables

frase = raw_input("Introduce tu frase: ")
palabras = frase.split()  # El array de palabras se crea
frase_pig_latyn = []
traduccion = ""

# Una vez obtenidas las palabras en [], tratamos cada una para aplicarle su traduccion

for palabra in palabras:
	if len(palabra) > 0 and palabra.isalpha():
		word = palabra.lower()
		first = word[0]
		new_word = word + first + 'ay'  # Se aplica el sonido de cerdito
		new_word = new_word[1:len(new_word)]
		traduccion = traduccion + new_word + " "
		pass
	pass

# Se imprime la traduccion final

print "Tu traduccion a Pyg Latin es: \n %s" % (traduccion)
