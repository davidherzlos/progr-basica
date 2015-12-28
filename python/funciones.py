# se define una función principal

def main():
    """Función principal"""
    
    def funcion_primaria():      
        print("Soy la función", funcion_primaria)

        def funcion_secundaria():
            print("Soy la función", funcion_secundaria)

        funcion_secundaria()
    funcion_primaria()

if __name__ == "__main__":
    main()