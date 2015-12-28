a_var = 'global value'

def outer():
	"""fdfsdf"""
    a_var = 'enclosed value'

    def inner():
        a_var = 'local value'
        print(a_var)

    inner()
    

outer()
class ClassName(object):
	"""docstring for ClassName"""
	def __init__(self, arg):
		super(ClassName, self).__init__()
		self.arg = arg
