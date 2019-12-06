'''
    - tamanho dinamico
    - utiliza array estatica
'''

from static_array import StaticArray

class DinamicArray:

    def __init__(self, *args):
        self.initial_size = 16 if len(args) < 16 else len(args) * 2
        self.items = StaticArray(self.initial_size, args)

    def insert(self, item, index):
        pass

    def append(self, item):
        if self.last_index != -1:
            self.items[self.last_index] = item
            self.increments_last_index()
        else:
            raise Exception

    def delete(self, index):
        try:
            self.items[index] = None
        except:
            raise Exception

    