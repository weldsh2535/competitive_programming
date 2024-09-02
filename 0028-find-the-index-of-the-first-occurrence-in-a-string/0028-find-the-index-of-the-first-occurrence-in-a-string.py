class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        h = len(haystack)
        n = len(needle)
        i, j, ind = 0, 0, 0

        while i < h and j < n:
            ind = i
            while i < h and j < n and haystack[i] == needle[j]:
                i += 1
                j += 1
            if j >= n:
                return ind
            else:
                j = 0
                i = ind + 1

        return -1
                