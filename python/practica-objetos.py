class Pata(object):
    medida = 40
    color = "café"
    gomitas = True

class PastorAleman(object):
    nombre = "Frodo"
    edad = 2
    color = "negro"
    esterilizado = False
    pata1 = Pata()
    pata2 = Pata()
    pata3 = Pata()
    pata4 = Pata()

from printr import printr

patita = Pata()

printr(patita)
