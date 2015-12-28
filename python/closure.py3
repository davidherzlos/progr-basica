# *_* coding: utf-8 *_*

# Este es un closure funcionando !!!! Yuju

def decir_algo_a_alguien(nombre_de_alguien):

	def decir_algo(algo):
		texto = algo + " " + nombre_de_alguien
		return texto
	return decir_algo

fab = decir_algo_a_alguien("Fabiola")

print(fab("Olita de mar"))