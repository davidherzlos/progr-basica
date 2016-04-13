# _*_ coding: utf-8 _*_

import time
def main():

    # Usuario y contexto actual
    actual_context = 'admin_area'
    actual_user = 'admin'

    def obtener_usuario(user, context):

        def dar_permiso(context):
            if user is 'admin' and context is 'admin_area':
                print("Permiso otorgado")
                return True
            else:
                print("Permiso denegado")
                return False

        return dar_permiso

    # Guardar usuario actual y contexto
    permiso = obtener_usuario(actual_user, actual_context)

    # Revisar si cuenta con permisos
    permiso(actual_context)

if __name__ == '__main__':
    main()
