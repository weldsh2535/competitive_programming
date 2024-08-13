class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        n = min(len(word1), len(word2))
        result = []

        for i in range(n):
            result.append(word1[i])
            result.append(word2[i])

        result.extend(word1[n:])
        result.extend(word2[n:])

        return ''.join(result)
        