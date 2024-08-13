class Solution:
    def removeDuplicates(self, s: str) -> str:
        string = []
        i = 0
        while i < len(s):
            if len(string)!=0 and string[-1]==s[i]:
                i+=1
                string.pop(-1)
            else:
                string.append(s[i])
                i+=1
        return "".join(i for i in string)

        