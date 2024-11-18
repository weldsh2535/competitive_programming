# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        return max(self.dp(root))
    def dp(self, cur):
        if not cur:
            return [0, 0]

        left = self.dp(cur.left)
        right = self.dp(cur.right)

        return [max(left) + max(right), cur.val + left[0] + right[0]]
        