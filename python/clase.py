def main():
    # Una clase bonita en python

    class Mujer():
        def __init__(self, nombre, apellido, saludo):
            """Inicializa el objeto"""
            self.nombre = nombre
            self.apellido = apellido
            self.saludo = saludo
            pass

        def saludar(self):
            """Saluda"""
            print(self.saludo)
            return self.saludo
            pass

        def cambiar_saludo(self, new_saludo):
            """Cambia el atributo de instancia 'saludo'"""
            self.saludo = new_saludo
            print("Saludo cambiado a:", self.saludo )
            return self.saludo
            pass
    pass

    # Pruebo mi objetito
    fabiola = Mujer("Faby", "Flores", "Olita de mar")
    print(fabiola.nombre, fabiola.apellido, fabiola.saludo)

    fabiola.cambiar_saludo("Qué pedo")
    print(fabiola.nombre, fabiola.apellido, fabiola.saludo)

if __name__ == "__main__":
    main()
