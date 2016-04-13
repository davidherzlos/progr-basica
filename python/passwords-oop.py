import random

# Strings map used as source for passwords
character_map = {
    'letters': "abcdefghijklmnopqrstuvwxyz",
    'numbers': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    'special_chars': '#%&$*~'
}

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


class Password(object):
    def __init__(self):
        self.empty_string = ''
        self.raw_string = ''
        self.formatted_string = ''
        self.mixed_string = ''
        self.actual_string = ''
        self.long_p = 0
        self.mayusc = False
        self.numbers = False
        self.specials = False

    def __str__(self):
        return self.actual_string

    def raw(self, long_p):
        """Generate a raw string used as a base password"""
        self.long_p = long_p
        for i in range(self.long_p):
            self.raw_string = self.raw_string + get_random_char('alpha')
        self.actual_string = self.raw_string
        return self.raw_string

    def format(self, char_number, char_type):
        """Process user options and add extra characterrs to actual password"""
        # TODO: Random characters and replacing over concatenation
        if char_number is 0:
            return self.actual_string
        self.formatted_string = self.actual_string + get_random_char(char_type)
        self.formatted_string = self.formatted_string[1:]
        self.actual_string = self.formatted_string
        self.format(char_number - 1, char_type)

    def shuffle(self):
        """Shuffle base_pass characters and print final password"""
        self.mixed_string = list(self.actual_string)
        random.shuffle(self.mixed_string)
        self.mixed_string = ''.join(self.mixed_string)
        self.actual_string = self.mixed_string
        return self.mixed_string


def make_pass(num=10, long_p=8, mayusc=False,
              numbers=False, specials=False, fname=None):
    """Make passwords with user options as arguments"""

    # Create a file if option exist
    if fname:
        archivo = open(fname, 'w')

    # Generate password
    for i in range(num):

        # Create an empty password
        paswort = Password()

        # Make a raw string used as a base password
        paswort.raw(long_p)

        # Add extra characters to raw string if user options exist

        # Determines proportionally how many extra characters
        # TODO: need to be fixed with mininum characters(8)
        if mayusc is True:
            chars_num = int((len(paswort.actual_string) * .38))
            paswort.format(chars_num, 'mayusc_alpha')
        if numbers is True:
            chars_num = int((len(paswort.actual_string) * .25))
            paswort.format(chars_num, 'numeric')
        if specials is True:
            chars_num = int((len(paswort.actual_string) * .13))
            paswort.format(chars_num, 'special')

        # Shuffle base_pass characters and print final password
        paswort.shuffle()

        # Writes passwords to file if name exist
        if fname:
            archivo.write(paswort.actual_string + '\n')
        else:
            print(paswort.actual_string)
    if fname:
        archivo.close()


def main():
    user_options = ask_user_options()
    make_pass(*user_options)

if __name__ == '__main__':
    main()
