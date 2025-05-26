// Last updated: 26/05/2025, 14:47:39
class TrieNode {
    children: Map<string, TrieNode>;
    word: string | null;

    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.word = word;
    }

    const result: string[] = [];
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number, node: TrieNode) => {
        const char = board[i][j];
        if (!node.children.has(char)) return;

        const nextNode = node.children.get(char)!;
        if (nextNode.word !== null) {
            result.push(nextNode.word);
            nextNode.word = null; // Avoid duplicate entries
        }

        board[i][j] = '#'; // Mark as visited
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] !== '#') {
                dfs(ni, nj, nextNode);
            }
        }
        board[i][j] = char; // Backtrack
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return result;
}