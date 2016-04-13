def main():
    '''Clasesitas para componer una cabeza'''

    # Boca
    class Esmalte(object):
        def __init__(self):
            self.calidad = False

    class Diente(object):
        def __init__(self):
            self.tono = ''
            self.esmalte = Esmalte()

    class Labio(object):
        def __init__(self):
          self.color = ''

    class Lengua(object):
        def __init__(self):
            self.tamaño = ''
            self.color = ''

    class Boca(object):
        def __init__(self):
            self.tamaño = ''
            self.labio = Labio()
            self.lengua = Lengua()
            self.diente = Diente()

    # Mejillas
    class Bello(object):
        def __init__(self):
            self.color = ''
            self.densidad = False

    class Mejilla(object):
        def __init__(self):
            self.bello = Bello()

    # Nariz
    class Nariz(object):
        def __init__(self):
            self.grosor = ''
            self.tamaño = ''
            self.forma = ''

    # Ojos
    class Ojo(object):
        def __init__(self):
            self.color = ''
            self.mirada = ''
            self.tamaño = ''

    # Orejas
    class Oreja(object):
        def __init__(self):
            self.temperatura = 0
            self.tamaño = ''

    # Craneo
    class Cerebro(object):
        def __init__(self):
            self.tamaño = ''
            self.funciona = False

    class Craneo(object):
        def __init__(self):
            self.forma = ''
            self.golpes = 0
            self.cerebro = Cerebro()

    # Cabeza

    class Cabeza(object):
        def __init__(self):
            self.craneo = Craneo()
            self.oreja = Oreja()
            self.ojo = Ojo()
            self.nariz = Nariz()
            self.mejilla = Mejilla()
            self.boca = Boca()

    cabezotas = Cabeza()

if __name__ == '__main__':
    main()
