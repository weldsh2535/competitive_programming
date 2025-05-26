// Last updated: 26/05/2025, 14:15:21
function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    const inDegree: number[] = new Array(n).fill(0);

    for (const [u, v] of edges) {
        adj[u].push(v);
        inDegree[v]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const topoOrder: number[] = [];
    while (queue.length > 0) {
        const u = queue.shift()!;
        topoOrder.push(u);
        for (const v of adj[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    if (topoOrder.length !== n) {
        return -1; // Cycle detected
    }

    let maxColor = 0;
    const dp: number[][] = Array.from({ length: n }, () => new Array(26).fill(0));

    for (const u of topoOrder) {
        const currentColor = colors.charCodeAt(u) - 'a'.charCodeAt(0);
        dp[u][currentColor]++;
        maxColor = Math.max(maxColor, dp[u][currentColor]);
        for (const v of adj[u]) {
            for (let c = 0; c < 26; c++) {
                if (dp[u][c] > dp[v][c]) {
                    dp[v][c] = dp[u][c];
                }
            }
        }
    }

    return maxColor;
};