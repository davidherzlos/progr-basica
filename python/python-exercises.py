"""La comunicacion entre entornos es muy clara en python"""

uno = 12
dos = "Hola a todos"
tres = True
cuatro = uno + 30


def numeros(x,y,z,n):
	print x
	uno = 2
	print uno
	print x
	print y
	print z
	print n
	n = uno + 5000
	print n
	return x, y, z, n


# Se invoca la func
numeros(uno,dos,tres,cuatro)

print uno, dos, tres, cuatro


def mi_funcion(numero):
	print numero
	pass

mi_funcion(2343453)

print "Parametros"

def p(*p):
	for arg in p:
		print arg
p(123123, "sedfrffddeg", uno, dos, tres, cuatro)



def fib(n):    # write Fibonacci series up to n
	"""Print a Fibonacci series up to n."""
	a, b = 0, 1
	while a < n:
		print(a)
		a, b = b, a+b
	return "Jajaja"

# Now call the function we just defined:
print(fib(2000))

def ask_ok(prompt, retries=4, complaint='Yes or no, please!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise OSError('uncooperative user')
        print(complaint)

print(ask_ok("Listo", 3, "ajaja"))






