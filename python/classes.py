# _*_ coding: utf-8 _*_

def main():
    import turtle as tortuga
    import time

    # Settings
    t = tortuga.Turtle()
    t.speed(10)

    # Dibujar la tortuga
    t.left(90)
    t.forward(50)
    t.right(90)
    t.forward(100)
    t.left(45)
    t.forward(50)
    t.right(45)
    t.forward(200)
    t.right(45)
    t.forward(50)
    t.left(45)
    t.forward(100)
    t.right(90)
    t.forward(50)
    t.left(90)

    print("Clasesita:")

    class Product(object):
        """Clasesita de producto"""
        def __init__(self, nombre, tipo, precio, disponible, serie):

            # super(Product, self).__init__()

            self.nombre = str(nombre)
            self.categoria = str(tipo)
            self.precio = float(precio)
            self.disponible = bool(disponible)
            self.numero_serie = int(serie)

    soup = Product("Jaboncito", "medicinal", 15.50, True, 123123)
    print(soup.nombre)
    print(soup.categoria)
    print(soup.precio)
    print(soup.disponible)
    print(soup.numero_serie)


if __name__ == '__main__':
    main()
