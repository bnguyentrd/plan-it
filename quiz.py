# def fix_misspellings(corrections):
#     for entry in corrections:
#         # print(entry.values())
#         # print(entry["word"])
#         # print(entry["position"])
#         entry["word"].pop(entry["position"])
#         return corrections



# def fix_misspellings(corrections):
#     corrected_words = []
#     for correction in corrections:
#         word = correction["word"]
#         index = int(correction["index"])
#         corrected_word = word[:index - 1] + word[index:]
#         corrected_words.append(corrected_word)
#     return corrected_words



# def fix_misspellings(corrections):
#     result = []
#     for entry in corrections:
#         word = entry["word"]
#         position = int(entry["position"])
#         corrected_word = word[:position - 1] + word[position:]
#         result.append(corrected_word)
#         print(word[:position - 1])
#         print(word[position:])
#     return result


# a = [ { "word": "tablett", "position": 7 },
#   { "word": "marrble", "position": 4 },
#   { "word": "xdocker", "position": 1 },
# ]

# print(fix_misspellings(a))



# def digits_to_number(digits):
#     # result = int("".join(map(str,digits)))
#     # return result

#     num =[str(i) for i in digits]
#     result = "".join(num)
#     return result


# def digits_to_number(digits):
#     num =[str(i) for i in digits]
#     result = "".join(num)
#     return int(result)

# def add_digits(digits1, digits2):
#     return digits_to_number(digits1) + digits_to_number(digits2)

# def add_reversed_digits(reversed_digits1, reversed_digits2):
#     r1 = reversed_digits1.reverse()
#     r2 = reversed_digits2.reverse()
#     return add_digits(r1, r2)

def digits_to_number(digits):
    num =[str(i) for i in digits]
    result = "".join(num)
    return int(result)

# combines list of nums into a signle digit, then adds them together
def add_digits(digits1, digits2):
    return digits_to_number(digits1) + digits_to_number(digits2)

def add_reversed_digits(reversed_digits1, reversed_digits2):
    r1 = int(''.join([str(i) for i in reversed_digits1[::-1]]))
    r2 = int(''.join([str(i) for i in reversed_digits2[::-1]]))
    x = [int(i) for i in list(str(r1 + r2))]
    return digits_to_number(x)




a = [3, 2, 1]
b = [3, 2, 1]

print(add_reversed_digits(a, b))
