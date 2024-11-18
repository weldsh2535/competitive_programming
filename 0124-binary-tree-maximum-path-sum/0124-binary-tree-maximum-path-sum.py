# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if not root:
                return 0
            l_max = dfs(root.left)
            r_max = dfs(root.right)
            """
            handle if l_max < 0:
                    -> start again from root.val
                   else:
                    -> l_max += root.val
            """
            if l_max < 0:
                l_max = root.val
            else:
                l_max += root.val
            """
            handle if r_max < 0:
                    -> start again from root.val
                   else:
                    -> r_max += root.val
            """
            if r_max < 0:
                r_max = root.val
            else:
                r_max += root.val

            self.maximum = max(self.maximum, l_max + r_max - root.val)
            return max(l_max, r_max)
           
        self.maximum = -float('inf')
        dfs(root)
        return self.maximum