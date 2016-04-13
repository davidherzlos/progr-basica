# _*_ coding: utf-8 _*_

import turtle

def trazar_circulo(size):
    t = turtle.Pen()
    t.speed(1000)
    t.circle(size)

def dibujar(numero, size):
    if numero == 0:
        return None
    trazar_circulo(size)
    dibujar(numero -1, size - 5)

dibujar(200, 200)