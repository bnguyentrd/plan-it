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



def fix_misspellings(corrections):
    result = []
    for entry in corrections:
        word = entry["word"]
        position = int(entry["position"])
        corrected_word = word[:position - 1] + word[position:]
        result.append(corrected_word)
        print(word[:position - 1])
        print(word[position:])
    return result


a = [ { "word": "tablett", "position": 7 },
  { "word": "marrble", "position": 4 },
  { "word": "xdocker", "position": 1 },
]

print(fix_misspellings(a))
