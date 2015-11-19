class PastorAleman():
    def __init__(self, nombre, pais, edad, genero):
        self.nombre = nombre
        self.pais = pais
        self.edad = edad
        self.genero = genero
        pass
    def __add__(self, otro_perro):
        if self.edad == max(self.edad,otro_perro.edad):
            genero = self.genero
        else:
            genero = otro_perro.genero
        return PastorAleman(self.nombre + "ita", self.pais, 0, genero)
    pass


machito = PastorAleman("Globy", "New_Zelanda", 3, "Macho")
print(machito.nombre, machito.pais)

hembrita = PastorAleman("Wiki", "Belgica", 7, "Hembra")
print(hembrita.nombre, hembrita.pais)

cachorro = hembrita + machito

print(cachorro.nombre, cachorro.edad, cachorro.pais, cachorro.genero)