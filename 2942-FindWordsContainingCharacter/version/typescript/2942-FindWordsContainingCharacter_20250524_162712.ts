// Last updated: 24/05/2025, 16:27:12
function findWordsContaining(words: string[], x: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }

    return result;
};