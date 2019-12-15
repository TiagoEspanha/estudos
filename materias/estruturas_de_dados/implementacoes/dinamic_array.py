'''
    - tamanho dinamico
    - utiliza array estatica
'''

from static_array import StaticArray

class DinamicArray:

    def __init__(self, *args):
        smaller_inicial_size = 4
        self.initial_size = smaller_inicial_size if len(args) < smaller_inicial_size else len(args) * 2
        self._static_array = StaticArray(self.initial_size, *args)
    
    #subscriptable
    def __getitem__(self, index):
        return self._static_array[index]

    #subscriptable
    def __setitem__(self, index, newItem):
        self._static_array[index] = newItem

    def _expand(self):
        pass

    def getItems(self):
        return self._static_array.items

    def get(self, index):
        return self._static_array.get(index)
    
    def set(self, index, item):
         self._static_array.set(index, item)

    def search(self, item):
        return self._static_array.search(item)

    def insert(self, index, item):
        pass

    def append(self, item):
        pass
        if self.last_index != -1:
            self._static_array[self.last_index] = item
            self.increments_last_index()
        else:
            raise Exception

    def delete(self, index):
        pass
        try:
            self._static_array[index] = None
        except:
            raise Exception

    