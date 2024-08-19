class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        
        for ch in s:
            if ch in '({[':
                stack.append(ch)
            else:
                if not stack:
                    return False
                
                character = stack.pop()
                if character == "(":
                    if ch != ")":
                        return False
                if character == "{":
                    if ch != "}":
                        return False
                if character == "[":
                    if ch != "]":
                        return False
                    
        if stack:
            return False
        
        return True
        