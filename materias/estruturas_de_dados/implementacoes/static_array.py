"""
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

    def search(self, item):
        for index, x in enumerate(self.items):
            if x == item:
                return index
        
        return -1

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



            


    

