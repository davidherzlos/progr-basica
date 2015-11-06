# _*_ coding: utf-8_*_

# Funciones convertidoras

def convertir_bytes(n, d):
	numero_a_convertir = n
	byte = numero_a_convertir
	mega = byte / 1024
	giga = mega / 1024
	print "===============================================================================================================================================\n"
	print "Tu conversión a continuación"
	print "  ", mega , "MB"
	print "  ", giga , "GB"  

def convertir_megas(n, d):
	numero_a_convertir = n
	mega = numero_a_convertir
	byte = mega * 1024
	giga = mega / 1024
	print "===============================================================================================================================================\n"
	print "Tu conversión a continuación"
	print "  ", byte , "Bytes"
	print "  ", giga , "GB"  

def convertir_gigas(n, d):
	numero_a_convertir = n
	giga = numero_a_convertir
	mega = giga * 1024
	byte = mega * 1024
	print "===============================================================================================================================================\n"
	print "Tu conversión a continuación"
	print "  ", mega , "MB"
	print "  ", byte , "Bytes"  


# Introducir datos

print 'Introduce el número a convertir:'
numero = float(raw_input())

print 'Especifica si son Bytes, Megabytes o Gigabytes: b / m / g'
denominacion = raw_input()

# Decidir qué función invocar

if denominacion == "b":
	convertir_bytes(numero, denominacion)

if denominacion == "m":
	convertir_megas(numero, denominacion)

if denominacion == "g":
	convertir_gigas(numero, denominacion)
