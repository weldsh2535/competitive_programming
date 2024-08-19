class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        output = n
        while (True):
            if output % 2 == 0 and output % n == 0:
                return output
            output += 1