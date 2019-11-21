import unittest
from static_array import StaticArray

class TestStaticArray(unittest.TestCase):
    
    def setUp(self):
        self.static_array_size = 4
        self.static_array = StaticArray(self.static_array_size, 1, 2, 3)
        print (self.static_array.items)

    def test_allocate_memory(self):
        self.assertEqual(self.static_array.last_index, 3)
        self.assertEqual(len(self.static_array.items), self.static_array_size)
        self.assertEqual(self.static_array.items[0], 1)
        self.assertEqual(self.static_array.items[3], None)

    def test_get(self):
        self.assertEqual(self.static_array.get(0), 1)
        self.assertRaises(Exception, self.static_array.get, self.static_array_size)

    def test_search(self):
        self.assertEqual(self.static_array.search(3), 2)
        self.assertEqual(self.static_array.search(1), 0)
        self.assertEqual(self.static_array.search(0), -1)
    
    def test_append(self):
        self.static_array.append(4)
        self.assertEqual(self.static_array.items, [1,2,3,4])
        self.assertRaises(Exception, self.static_array.append, 5)

    def test_delete(self):
        self.static_array.delete(0)
        self.assertEqual(self.static_array.items, [None, 2, 3, None])
        self.assertRaises(Exception, self.static_array.delete, 5)





if __name__ == '__main__':
    unittest.main()