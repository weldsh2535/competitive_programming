class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        prefix_sum = res = 0
        prefix_dict = collections.defaultdict(int)
        prefix_dict[0] = 1

        for num in nums:
            prefix_sum += num
            rem = prefix_sum % k
            if rem in prefix_dict:
                res += prefix_dict[rem]
            prefix_dict[rem] += 1
        return res
        