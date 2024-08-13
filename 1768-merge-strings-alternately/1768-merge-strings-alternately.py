class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        n = min(len(word1), len(word2))
        prefix = []

        for i in range(n):
            prefix.append(word1[i])
            prefix.append(word2[i])

        return ''.join(prefix) + word1[n:] + word2[n:]
        