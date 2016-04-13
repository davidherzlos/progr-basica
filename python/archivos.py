# _*_ coding: utf-8 _*_
import sys

def main():
    class Registro(object):
        """Un registro del csv"""
        def __init__(self):
            super(Registro, self).__init__()
            self.username = ''
            self.password = ''
            self.firstname = ''
            self.lastname = ''
            self.email = ''
            self.course = ''
            self.group = ''
            self.type1 = ''

    def ask_user():

        print("Introduce el nombre corto del Curso\n")
        curso = str(input())
        print("Introduce el número de registros a crear\n")
        lineas = int(input())
        print("Introduce el nombre del archivo\n")
        file_name = str(input())

        return curso, lineas, file_name

    def crear_archivo(curso, lineas, nombre):
        """Crea e archivo csv"""
        archivo = open(nombre + '.csv', 'w')
        archivo.write("username,password,firstname,lastname,email,course1,group1,type1\n")
        for i in range(lineas):
            archivo.write(",,,,,{0},,\n".format(curso))
        archivo.close()

    master = Registro()
    master.course, lineas, file_name = ask_user()
    crear_archivo(master.course, lineas, file_name)

if __name__ == '__main__':
    main()

