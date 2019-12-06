import unittest
from dinamic_array import DinamicArray

class TestDinamicArray(unittest.TestCase):

    def SetUp(self):
        pass

    def test_init(self):
        pass

    def test_append(self):
        self.static_array.append(4)
        self.assertEqual(self.static_array.items, [1,2,3,4])
        self.assertRaises(Exception, self.static_array.append, 5)

    def test_delete(self):
        self.static_array.delete(0)
        self.assertEqual(self.static_array.items, [None, 2, 3, None])
        self.assertRaises(Exception, self.static_array.delete, 5)

    def test_get(self):
        pass

    def test_expand(self):
        pass

    