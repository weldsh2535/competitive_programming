// Last updated: 31/05/2025, 08:17:23
function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    const target = n * n;

    // Convert the board to a 1D array (1-based index)
    const cells: number[] = new Array(target + 1).fill(-1);
    let index = 1;
    for (let row = n - 1; row >= 0; row--) {
        if ((n - 1 - row) % 2 === 0) {
            // Left to right
            for (let col = 0; col < n; col++) {
                cells[index++] = board[row][col];
            }
        } else {
            // Right to left
            for (let col = n - 1; col >= 0; col--) {
                cells[index++] = board[row][col];
            }
        }
    }

    // BFS setup
    const visited = new Set<number>();
    const queue: [number, number][] = [[1, 0]]; // [square, moves]
    visited.add(1);

    while (queue.length > 0) {
        const [current, moves] = queue.shift()!;

        if (current === target) {
            return moves;
        }

        // Explore all possible dice rolls (1 to 6)
        for (let i = 1; i <= 6; i++) {
            let next = current + i;
            if (next > target) {
                continue; // Cannot move beyond the board
            }

            // Check for snake or ladder
            if (cells[next] !== -1) {
                next = cells[next];
            }

            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1; // Target not reachable
};