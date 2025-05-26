// Last updated: 26/05/2025, 14:44:11
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    solve(board);
};

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                for (let num = 1; num <= 9; num++) {
                    const char = num.toString();
                    if (isValid(board, row, col, char)) {
                        board[row][col] = char;
                        if (solve(board)) return true;
                        board[row][col] = "."; // backtrack
                    }
                }
                return false; // no valid number found
            }
        }
    }
    return true; // solved!
}

function isValid(board, row, col, char) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === char) return false; // row check
        if (board[i][col] === char) return false; // column check
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + (i % 3);
        if (board[boxRow][boxCol] === char) return false; // 3x3 box check
    }
    return true;
}