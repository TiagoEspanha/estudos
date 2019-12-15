import unittest
from dinamic_array import DinamicArray

class TestDinamicArray(unittest.TestCase):

    def setUp(self):
        self.dinamic_array = DinamicArray(1, 2, 3)

    def test_init(self):
        self.assertEqual(self.dinamic_array.getItems(), [1,2,3,None])
        dinamic_array_bigger_inicial_size = DinamicArray(1,2,3,4)
        self.assertEqual(dinamic_array_bigger_inicial_size.getItems(), [1,2,3,4,None,None,None,None])
    
    def test_if_is_subscriptable(self):
        self.assertEqual(self.dinamic_array[0], 1)
        self.dinamic_array[0] = 99
        self.assertEqual(self.dinamic_array[0], 99)

    def test_search(self):
        self.assertEqual(self.dinamic_array.search(3), 2)
        self.assertEqual(self.dinamic_array.search(1), 0)
        self.assertEqual(self.dinamic_array.search(0), -1)

    def test_append(self):
        pass

    def test_delete(self):
        pass

    def test_expand(self):
        pass

    
if __name__ == '__main__':
    unittest.main()