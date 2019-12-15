import unittest
from static_array import StaticArray

class TestStaticArray(unittest.TestCase):
    
    def setUp(self):
        self.static_array_size = 4
        self.static_array = StaticArray(self.static_array_size, 1, 2, 3)

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

    def test_if_is_subscriptable(self):
        self.assertEqual(self.static_array[0], 1)
        self.static_array[0] = 99
        self.assertEqual(self.static_array[0], 99)

    
  


if __name__ == '__main__':
    unittest.main()