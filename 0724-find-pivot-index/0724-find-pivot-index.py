class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        sum_arr = sum(nums)
        total = 0
        for i , num in enumerate(nums):
            total += num
            if (total - num == sum_arr - total):
                return i
            
        return -1
        