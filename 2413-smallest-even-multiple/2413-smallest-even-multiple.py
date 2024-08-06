class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        for i in range(n,2*n+1):
            if i % 2 == 0 and n % i == 0:
                break
        return i