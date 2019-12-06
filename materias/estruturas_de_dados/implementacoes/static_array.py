"""
    Caracteristicas
    
    -Tamanho fixo
    -Memoria sequencial 
"""

class StaticArray:
    
    def __init__(self, size, *args):
        if len(args) > size:
            raise Exception

        self.size = size
        self.items = []
        self.last_index = 0
        self.allocate_memory(args)

    #subscriptable
    def __getitem__(self, index):
        return self.items[index]

    #subscriptable
    def __setitem__(self, index, newItem):
        self.items[index] = newItem


    def allocate_memory(self, args): #fake por enquanto
        for x in range(self.size):
            try:
                self.items.append(args[x])
                self.increments_last_index()
            except:
                self.items.append(None)

    def increments_last_index(self):
        self.last_index += 1
        if self.last_index >= self.size:
            self.last_index = -1 

    def get(self, index):
        try:
            return self.items[index]
        except:
            raise Exception
        
    def set(self, index, value):
        try:
            self.items[index] = value
        except:
            raise Exception

    def search(self, item):
        for index, x in enumerate(self.items):
            if x == item:
                return index
        
        return -1




            


    

