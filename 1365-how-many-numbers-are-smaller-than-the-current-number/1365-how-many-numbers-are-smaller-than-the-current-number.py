class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        arr = nums.copy()
        arr.sort()
        for i in range(len(nums)):
            nums[i] = self.search(arr, nums[i])
        return nums

    def search(self, nums, x):
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) // 2
            if nums[mid] >= x:
                r = mid
            else:
                l = mid + 1
        return l