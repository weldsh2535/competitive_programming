class Solution:
    def findLHS(self, nums: List[int]) -> int:
        count = {}
        for x in nums:
            count[x] = count.get(x, 0) + 1

        ans = 0
        for x, c in count.items():
            if x + 1 in count:
                ans = max(ans, c + count[x + 1])

        return ans