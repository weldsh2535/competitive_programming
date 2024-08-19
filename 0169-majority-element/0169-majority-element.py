class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        m = 0
        for x in nums:
            if count == 0:
                m = x
                count = 1
            else:
                count += 1 if m == x else -1
        return m
        