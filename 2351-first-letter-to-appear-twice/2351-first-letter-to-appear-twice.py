class Solution:
    def repeatedCharacter(self, s: str) -> str:
        count = Counter()
        for c in s:
            count[c] += 1
            if count[c] == 2:
                return c
        