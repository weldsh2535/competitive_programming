// Last updated: 26/05/2025, 14:21:58
function isZeroArray(nums: number[], queries: number[][]): boolean {
    const n = nums.length;
    const diff: number[] = new Array(n + 1).fill(0); // Difference array

    // Apply range updates
    for (const [l, r] of queries) {
        diff[l] += 1;
        if (r + 1 < n) {
            diff[r + 1] -= 1;
        }
    }

    // Build the prefix sum from diff to get how many times each index is affected
    const count: number[] = new Array(n).fill(0);
    let runningSum = 0;
    for (let i = 0; i < n; i++) {
        runningSum += diff[i];
        count[i] = runningSum;
    }

    // Check if each nums[i] can be reduced to zero
    for (let i = 0; i < n; i++) {
        if (nums[i] > count[i]) {
            return false;
        }
    }

    return true;
};