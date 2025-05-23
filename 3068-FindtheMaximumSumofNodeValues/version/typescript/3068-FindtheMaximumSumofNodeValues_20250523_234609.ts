// Last updated: 23/05/2025, 23:46:09
function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    const n = nums.length;
    let totalSum = 0;
    let count = 0;
    let minLoss = Infinity;

    for (let i = 0; i < n; i++) {
        const xorVal = nums[i] ^ k;
        if (xorVal > nums[i]) {
            totalSum += xorVal;
            count++;
        } else {
            totalSum += nums[i];
        }
        const loss = Math.abs(nums[i] - xorVal);
        if (loss < minLoss) {
            minLoss = loss;
        }
    }

    if (count % 2 === 0) {
        return totalSum;
    } else {
        return totalSum - minLoss;
    }

};