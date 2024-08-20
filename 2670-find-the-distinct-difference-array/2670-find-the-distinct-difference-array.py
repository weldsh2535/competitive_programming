class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
      
        ans = []
        
        for i in range(len(nums)):
            prefix = len(set(nums[:i+1]))
            suffix = len(set(nums[i+1:]))
            ans.append(prefix - suffix)
        return ans
        