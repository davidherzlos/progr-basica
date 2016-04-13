def main():
    import random

    # Strings map used as source for passwords
    character_map = {
        'letters': "abcdefghijklmnopqrstuvwxyz",
        'numbers': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        'special_chars': '#%&$*~'
    }

    # ##Functions##

    # TODO: Use 'guess and check' and 'guardian' patterns.
    # TODO: Refactor functions into OOP

    def ask_user_options():
        """ User options

        Ask user for input and returns a tuple with options for password
        generation.

        """
        while True:
            try:
                print('¿Cuantas contraseñas quieres?')
                num_op = int(input())
                if num_op <= 0:
                    raise ValueError
                else:
                    break
            except ValueError:
                print('Debes escribir un número mayor que 0.')
                continue
        while True:
            try:
                print('¿De cuantos caracteres?. 8 como mínimo.')
                long_op = int(input())
                if long_op < 8:
                    raise ValueError
                else:
                    break
            except ValueError:
                print('Debes escribir un número igual o mayor que 8')
                continue

        print('¿Mayúsculas?. S para incluir o enter para omitir')
        mayusc_op = bool(input())
        print('¿Números?. S para incluir o enter para omitir')
        numbers_op = bool(input())
        print('¿Caracteres especiales?. S para incluir o enter para omitir')
        special_op = bool(input())
        print("Escribe el nombre del archivo")
        f_name_op = str(input())
        return (num_op, long_op, mayusc_op, numbers_op, special_op, f_name_op)

    # TODO: improve this function
    def get_random_char(char_type='alpha'):
        """Take character type as a parameter and returns a random character"""

        if char_type is 'alpha':
            return random.choice(character_map['letters'])
        if char_type is 'mayusc_alpha':
            return random.choice(character_map['letters']).upper()
        if char_type is 'numeric':
            return str(random.choice(character_map['numbers']))
        if char_type is 'special':
            return random.choice(character_map['special_chars'])

    def add_extra(base_password, char_number, char_type):
        """Process user options and add extra characters to actual password"""

        # TODO: Random characters and replacing over concatenation
        if char_number is 0:
            return base_password
        formatted = base_password + get_random_char(char_type)
        formatted = formatted[1:]
        formatted = add_extra(formatted, char_number - 1, char_type)
        return formatted

    def make_pass(num=10, long_p=8, mayusc=False,
                  numbers=False, specials=False, fname=None):
        """Make passwords with user options as arguments"""

        # Create a file if option exist
        if fname:
            archivo = open(fname, 'w')

        # Generate password
        for i in range(num):

            # First a raw string used as a base password
            raw_string = ''
            for i in range(long_p):
                raw_string = raw_string + get_random_char('alpha')

            # Add extra characters to raw string if user options exist

            base_pass = raw_string
            # Determines proportionally how many extra characters
            # TODO: need to be fixed with mininum characters(8)
            if mayusc is True:
                chars_num = int((len(base_pass) * .38))
                base_pass = add_extra(base_pass, chars_num, 'mayusc_alpha')
            if numbers is True:
                chars_num = int((len(base_pass) * .25))
                base_pass = add_extra(base_pass, chars_num, 'numeric')
            if specials is True:
                chars_num = int((len(base_pass) * .13))
                base_pass = add_extra(base_pass, chars_num, 'special')

            # Shuffle base_pass characters and print final password
            formatted_pass = list(base_pass)
            random.shuffle(formatted_pass)
            final_password = ''.join(formatted_pass)

            # Writes passwords to file if name exist
            if fname:
                archivo.write(final_password + '\n')
            else:
                print(final_password)
        if fname:
            archivo.close()

    # ##Main algorithm##
    user_options = ask_user_options()
    make_pass(*user_options)

if __name__ == '__main__':
    main()
