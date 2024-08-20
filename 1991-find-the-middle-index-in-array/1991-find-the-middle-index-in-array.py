class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        sum_array = sum(nums)
        total = 0
        for i,num in enumerate(nums):
            total += num
            if total - num == sum_array - total:
                return i
        return -1
        
            
                
        