from unittest import TestCase


# FUNCTION BASED TEST
def test_find_sum_indexes():
    input = [1, 3, 5, 7]
    target = 10

    result = find_sum_indexes(input, target)

    assert result == [1, 3]

print(test_find_sum_indexes)



# CLASS BASED TEST
class TestFindSumIndexes(TestCase):
    def test_find_sum_indexes(self):
        # Arrange
        input = [1, 3, 5, 7]
        target = 10

        # Act
        result = find_sum_indexes(input, target)

        # Assert
        self.assertListEqual(result, [1, 3])
