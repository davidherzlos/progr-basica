
def suma(n):
    print("En este momento n vale", n) 
    if n == 0:
        print("Después del condicional valgo: ", n)
        return n
    print(n)
    return suma(n-1) + n


x = int(input("Escribe un número"))
s = suma(xn

print("La suma es", s)