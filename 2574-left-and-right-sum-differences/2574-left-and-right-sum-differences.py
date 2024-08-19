class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        left,right = 0,sum(nums)
        ans = []
        
        for i in nums:
            right -= i
            ans.append(abs(left - right))
            left += i
            
        return ans
        