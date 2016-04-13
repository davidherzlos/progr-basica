# Ejercicio Interface Design

from swampy.TurtleWorld import *

world = TurmiteWorld()
bob = TurmiteWorld()
wait_for_user()

for i in range(4):
    fd(bob, 100)
    lt()

def square(t, length):

    fd(t, length)


square(bob, 100)
