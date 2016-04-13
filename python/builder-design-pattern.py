def main():
    """Patrón de diseño builder.

    Separa la contrucción de un objeto de su representación

    """

    # Class de un carrito
    class Car(object):
        def __init__(self):
            self.doors = 0

        def add_parts(self, n_puertas):
            self.doors = n_puertas

        def do_something(self):
            print('Tengo {0} puertas'.format(self.doors))

    # Contructor de carritos
    class CarBuilder(object):
        def __init__(self):
            self.carro = None

        def step_1(self):
            self.carro = Car()

        def step_2(self):
            self.carro.add_parts(6)

        def getResult(self):
            return self.carro

    # Director de la construcción
    class Director(object):
        def construct(self, builder):
            builder.step_1()
            builder.step_2()
            return builder.getResult()

    # Función principal que nos dará el carrito usando las otras partes
    def testBuilderPattern():
        shop = Director()
        car_builder = CarBuilder()
        car = shop.construct(car_builder)

        # Mi objetito al final funcionando
        car.do_something()

    testBuilderPattern()

if __name__ == '__main__':
    main()
