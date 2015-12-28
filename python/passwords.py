# _*_ coding: utf-8 _*_
"""Función principal, buena práctica"""
def main():
    """Función principal, buena práctica"""
    import random

    # Universo de caracteres para generar contraseña
    universo_caracteres = {
        'letras': "abcdefghijklmnopqrstuvwxyz",
        'numeros': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        'caracteres_especiales': '#%&$*~'
    }

    def get_random_char(tipo):
        """Genera un caracter random según el parámetro dado"""
        if tipo == 'alfanumerico':
            return random.choice(universo_caracteres['letras'])
        if tipo == 'alfanumerico_mayusc':
            return random.choice(universo_caracteres['letras']).upper()
        if tipo == 'numerico':
            return str(random.choice(universo_caracteres['numeros']))
        if tipo == 'especial':
            return random.choice(universo_caracteres['caracteres_especiales'])

    # TODO: Terminar la función que prepara la entrada del usuario
    def ask_user():
        """Procesa la entrada del usuario"""

        numero_passwords = int(input('¿Cuantas contraseñas quieres?\n'))
        longitud_password = int(input('¿De cuantos caracteres?\n'))
        mayusculas = bool(input('¿Mayúsculas?. Enter para omitir s para aceptar\n'))
        numericos = bool(input('¿Números?. Enter para omitir, s para aceptar\n'))
        especiales = bool(input('¿Caracteres especiales? Enter para omitir, s para aceptar\n'))

        return [numero_passwords, longitud_password, mayusculas, numericos, especiales]

    opciones = ask_user()

    def make_password(np, lp, may, num, esp):
        """Generar el password"""
        __name__ = "el pass"

        # Bucle que genera todos los passwords y los imprime
        for i in range(np):
            password_crudo = ''

            # Bucle que genera la cadena cruda de un password
            for i in range(lp):
                password_crudo = password_crudo + get_random_char('alfanumerico')

            def add_extra_chars(passw_c, char):
                """Procesa las opciones del password y lo formatea"""

                # Procesar opciones
                if char == 'alfanumerico_mayusc':
                    veces = int((len(passw_c) * .30))
                if char == 'numerico':
                    veces = int((len(passw_c) * .20))
                if char == 'especial':
                    veces = int((len(passw_c) * .10))

                def insert_char(p, v, ch):
                    """Formatea el password según opciones"""

                    # TODO: Caracteres aletorios y remplazo en lugar de concatenación
                    if v == 0:
                        return p
                    p = p + get_random_char(ch)
                    p = p[1:]
                    return insert_char(p, v - 1, ch)

                # Formatear password
                passw_f = insert_char(passw_c, veces, char)
                return passw_f

            # Procesar el password crudo y formatearlo si hay opciones
            if may is True:
                password_crudo = add_extra_chars(password_crudo, 'alfanumerico_mayusc')
            if num is True:
                password_crudo = add_extra_chars(password_crudo, 'numerico')
            if esp is True:
                password_crudo = add_extra_chars(password_crudo, 'especial')

            # Preparar el password para imprimirlo por pantalla
            password_formateado = password_crudo
            password_formateado = list(password_formateado)
            random.shuffle(password_formateado)
            password_formateado = ''.join(password_formateado)
            print(password_formateado)

    make_password(*opciones)

if __name__ == '__main__':
    main()
