# _*_ coding: utf-8 _*_
"""
    Este programita te recuerda
    cada 2 horas tomar un break
    """
import webbrowser
import time

numero_de_breaks = 2
intervalo_de_breaks = 10

for i in range(numero_de_breaks):
    time.sleep(intervalo_de_breaks)
    print("Hora de descanso")
    print(time.ctime())
    webbrowser.open("https://www.youtube.com/watch?v=BHd4O9pvfow")

print("A descansar")
