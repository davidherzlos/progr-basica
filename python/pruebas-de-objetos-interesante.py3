# Un ejercicio para ver objetos en namespaces

print( "Objetos en principal", dir() )


def function():
    """Una funcion principal"""

    from math import sqrt
    
    var1 = 1
    var2 = 2


    def foo2():
        """Otra funcion"""


        def saludar(p):
            """Otra funcioncita"""
            print("Objetos en saludar", dir())
            pass

        saludar(var1)
        
        class ClassName(object):
            """docstring for ClassName"""
            def __init__(self, arg):
                super(ClassName, self).__init__()
                self.arg = arg
        
        if __name__ == '__main__':
            print ("Objetos en foo2", dir())
            pass
    foo2()

    if __name__ == '__main__':
        print ("objetos en function", dir())

    pass

function()

def gun():
    print("Bang")

gun()