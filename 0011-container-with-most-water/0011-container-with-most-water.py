class Solution:
    def maxArea(self, height: List[int]) -> int:
        i , j = 0, len(height) - 1
        output = 0
        while i < j:
            total = (j - i) * min(height[i], height[j])
            output = max(output,total)
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1
        return output