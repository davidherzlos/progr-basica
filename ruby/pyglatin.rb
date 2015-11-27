# Traduce una frase a Pyg Latin

# Variables

print "Introduce tu frase"
frase = gets.chomp
palabras = frase.split(" ")  # El array de palabras se crea
frase_pig_latyn = []
traduccion = ""

# Una vez obtenidas las palabras en [], tratamos cada una para aplicarle su traduccion

for palabra in palabras [do]

	if palabra.length > 0
		word = palabra.downcase()
		first = word[0]
		new_word = word + first + 'ay'  # Se aplica el sonido de cerdito
		new_word = new_word[1:new_word.length]
		traduccion = traduccion + new_word + " "
		end
	end

# Se imprime la traduccion final

print "Tu traduccion a Pyg Latin es: #{traduccion}"