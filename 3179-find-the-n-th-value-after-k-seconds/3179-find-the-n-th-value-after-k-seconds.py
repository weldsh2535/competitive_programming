class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        s = [1 for _ in range(n)]
        MOD = 10**9 + 7
        for i in range(k):
            for j in range(1,n):
                s[j] = (s[j] + s[j-1]) % MOD
        return s[n-1]
                
        