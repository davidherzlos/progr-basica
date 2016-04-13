# _*_ coding: utf-8 _*_
# """Pruebas para el paso por valor y por referencia en Python"""

# def main():
#     argumento = [0,1,2]
#     print(" Id: ", id(argumento), "\n", "Valor antes del llamado de función", argumento)

#     def foo():
#         argumento.append(4)
#         print(" Id: ", id(argumento), "\n", "Valor durante el llamado de función", argumento)

#     foo()
#     print(" Id: ", id(argumento), "\n", "Valor después del llamado de función", argumento)

# if __name__ == '__main__':
#     main()


# def main():
#     argumento = [0,1,2]
#     print(" Id: ", id(argumento), "\n", "Valor antes del llamado de función", argumento)

#     def foo(p):
#         p.append(4)
#         print(" Id: ", id(p), "\n", "Valor durante el llamado de función", p)

#     foo(argumento)
#     print(" Id: ", id(argumento), "\n", "Valor después del llamado de función", argumento)

# if __name__ == '__main__':
#     main()

# """Aplica lexical scoping"""
# def main():
#     argumento = [0,1,2]
#     print(" Id: ", id(argumento), "\n", "Valor antes del llamado de función", argumento)

#     def foo():
#         argumento = []
#         argumento.append(4)
#         print(" Id: ", id(argumento), "\n", "Valor durante el llamado de función", argumento)

#     foo()
#     print(" Id: ", id(argumento), "\n", "Valor después del llamado de función", argumento)

# if __name__ == '__main__':
#     main()

# """Aplica lexical scoping"""
# def main():
#     argumento = [0,1,2]
#     print(" Id: ", id(argumento), "\n", "Valor antes del llamado de función", argumento)

#     def foo(p):
#         p = []
#         p.append(4)
#         print(" Id: ", id(p), "\n", "Valor durante el llamado de función", p)

#     foo(argumento)
#     print(" Id: ", id(argumento), "\n", "Valor después del llamado de función", argumento)

# if __name__ == '__main__':
#     main()
