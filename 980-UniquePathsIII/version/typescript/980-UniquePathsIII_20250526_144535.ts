// Last updated: 26/05/2025, 14:45:35
function uniquePathsIII(grid) {
    const m = grid.length, n = grid[0].length;
    let emptyCount = 0;
    let startX, startY;

    // Count empty cells and find start position
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) emptyCount++;
            else if (grid[i][j] === 1) {
                startX = i;
                startY = j;
            }
        }
    }

    // Include the start square as part of empty squares count
    emptyCount++;

    let pathCount = 0;

    function dfs(x, y, remain) {
        // Check boundaries and obstacles
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === -1) return;

        if (grid[x][y] === 2) {
            if (remain === 0) pathCount++;
            return;
        }

        // Mark visited
        let temp = grid[x][y];
        grid[x][y] = -1;

        // Explore neighbors
        dfs(x + 1, y, remain - 1);
        dfs(x - 1, y, remain - 1);
        dfs(x, y + 1, remain - 1);
        dfs(x, y - 1, remain - 1);

        // Backtrack: unmark
        grid[x][y] = temp;
    }

    dfs(startX, startY, emptyCount);

    return pathCount;
}
