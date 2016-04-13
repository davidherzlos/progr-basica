# _*_ coding: utf-8 _*_

# Crear la lista
lista = ["El hobbit", "La guerra de las galaxias", "Intensamente"]

#Insertar año en lista

def dar_anios():
    indice = input("Dame el índice\n")
    ano = input("Dame el año\n") 
    return indice, ano

def insertar(lista_p, datos):
    opciones = list(datos)
    lista_p.insert(*opciones)
    return lista_p

print("Valor inicial de mi lista: ", lista)
insertar(lista, dar_anios())
print("Valor final de mi lista: ", lista)

for elemento in lista:
    print(elemento)