dic = { '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10': 'j',
        '11': 'k',
        '12': 'l',
        '13': 'm',
        '14': 'n',
        '15': 'o',
        '16': 'p',
        '17': 'q',
        '18': 'r',
        '19': 's',
        '20': 't',
        '21': 'u',
        '22': 'v',
        '23': 'x',
        '24': 'y',
        '25': 'z',
        }


def num_ways(code):
    ways = 0
    code_length = len(code) - 1
    for key, value in enumerate(code):
        #print('key ' + str(key))
        #print('value ' + str(value))
        #print(dic.get(value))
        if not dic.get(value):
            return 0
        else:
            ways += 1
        
        if key + 1 <= code_length:
            next_value = str(value) + str(code[key+1])
            if dic.get(next_value):
                ways += 1
        
    return ways
        



print(num_ways('123'))

1 2 3

12 3

1 23



