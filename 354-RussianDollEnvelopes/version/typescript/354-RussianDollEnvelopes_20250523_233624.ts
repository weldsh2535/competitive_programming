// Last updated: 23/05/2025, 23:36:24
function maxEnvelopes(envelopes: number[][]): number {
    if (envelopes.length === 0) return 0;

    // Sort envelopes by width ascending, and by height descending if widths are equal
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    // Find the longest increasing subsequence based on height
    const dp: number[] = [];
    for (const envelope of envelopes) {
        const height = envelope[1];
        let left = 0;
        let right = dp.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < height) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === dp.length) {
            dp.push(height);
        } else {
            dp[left] = height;
        }
    }

    return dp.length;
}