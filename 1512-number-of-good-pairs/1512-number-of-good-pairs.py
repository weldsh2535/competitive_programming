class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        good_pairs = 0
        n = len(nums)
        for i in range(n):
            for j in range(n):
                if nums[i] == nums[j] and i < j:
                    good_pairs += 1
        return good_pairs
        
        