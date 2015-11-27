""" Para toda función recursiva, hay que considerar lo siguiente:
1. Definir la función, sus parámetros y su valor de retorno
2. Escriir un caso base en donde la función recursiva deje de serlo, casi siempre un if
3. Hacer la función recursiva pasándole parámetros menores a los de lal última llamada a la función, para asegurar que se avance en la secuencia
4. Probar y probar """

def suma(n):
    print("En este momento n vale", n) 
    if n == 0:
        print("Después del condicional valgo: ", n)
        return n
    print(n)
    return suma(n-1) + n


x = int(input("Escribe un número"))
s = suma(x)

print("La suma es", s)