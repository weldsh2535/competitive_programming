class Solution:
    def trimMean(self, arr: List[int]) -> float:
        mean = float()
        s = 0
        arr.sort()
        count = 0
        n = len(arr)
        limit = int(n * 0.05)
        end = n - limit
        start = limit
        for i in range(start, end):
            s += arr[i]
            count += 1
        mean = s/count
        return mean
            
            
        
        