def suma(*args):
	acumulador = 0
	for n in args:
		print type(n)
# suma(raw_input(), raw_input(), raw_input(), raw_input(), raw_input())

def palabras(*palabras):
	frase = []
	for palabra in palabras:
		print palabra
		frase.append(palabra)
	print frase

# palabras(raw_input(), raw_input(), raw_input(), raw_input(),)

x = 2
def func():
	# Local scope
	print x
	x = False
	return x

print func()

# Funciones en python

def funcion():  # Defino una función sin nada, hay que usar pass
	pass


def function2():  # Esta función tiene un docstring, tida función debe tener uno que documente la función
	"""Esta función me dice hola"""
	print "Hola"

def function3():
	pass

# Cuado una función realiza una acción pero no retorna un valor, se le conoce como void function


