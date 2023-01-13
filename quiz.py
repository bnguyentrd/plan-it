def find_sum_indexes(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]


a = [1, 3, 5, 7 , 6, 4]

print(find_sum_indexes(a, 10))


