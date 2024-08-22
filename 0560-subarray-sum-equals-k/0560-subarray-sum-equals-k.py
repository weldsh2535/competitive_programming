class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        if not nums:
            return 0
        prefix_dict = collections.defaultdict(int)
        prefix_dict[0] = 1
        prefix_sum = res = 0
        
        for num in nums:
            prefix_sum += num
            if prefix_sum - k in prefix_dict:
                res += prefix_dict[prefix_sum - k]
                
            prefix_dict[prefix_sum] += 1
            
        return res