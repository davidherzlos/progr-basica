# El primer ámbito es el exterior, es decir lo que está fuera de este modulo: __main__

# Ámbito global: todo el modulo es scope global

def prueba_ambitos():
    # Ámbito nonlocal

    def hacer_local(): # Escenario mas recomendado
        # Aḿbito local
        algo = "algo local"
        print(algo)

    def hacer_nonlocal():
        # Aḿbito local
        nonlocal algo
        algo = "algo no local"
        print(algo)

    def hacer_global():
        # Aḿbito local
        global algo
        algo = "algo global"
        print(algo)


    algo = "algo de prueba" # Variable de ámbito nonlocal
    print ("Valor inicial:", algo)

    hacer_local()
    print("Luego de la asignación local:", algo)
    
    hacer_nonlocal()
    print("Luego de la asignación no local:", algo)
    
    hacer_global()
    print("Luego de la asignación global:", algo)

prueba_ambitos()
print("In global scope:", algo)