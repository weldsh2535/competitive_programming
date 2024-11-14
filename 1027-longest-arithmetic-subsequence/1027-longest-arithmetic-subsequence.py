class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        nearest_deltas = [dict() for _ in nums]
        for i, a in enumerate(nums):
            for j, b in enumerate(nums[i+1:], start=i+1):
                delta = b - a
                if delta not in nearest_deltas[i]:
                    nearest_deltas[i][delta] = j

        @functools.cache
        def rec(i, delta):
            if delta in nearest_deltas[i]:
                return 1 + rec(nearest_deltas[i][delta], delta)
            return 1

        soln = 2
        for i, _ in enumerate(nums):
            for delta in nearest_deltas[i]:
                soln = max(soln, rec(i, delta))
        return soln