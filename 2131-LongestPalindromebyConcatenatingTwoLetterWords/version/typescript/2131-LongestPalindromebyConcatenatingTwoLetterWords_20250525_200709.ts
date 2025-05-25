// Last updated: 25/05/2025, 20:07:09
function longestPalindrome(words: string[]): number {
    const freqMap = new Map<string, number>();
    let length = 0;
    let hasCenter = false;

    // Count frequency of each word
    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    for (const [word, count] of freqMap.entries()) {
        if (word[0] === word[1]) {
            // Handle self-palindromic words like "gg"
            const pairs = Math.floor(count / 2);
            length += pairs * 4;
            if (count % 2 === 1) {
                hasCenter = true;
            }
        } else {
            // Handle mirror pairs like "ab" and "ba"
            const reversed = word[1] + word[0];
            if (freqMap.has(reversed)) {
                const minPairs = Math.min(count, freqMap.get(reversed)!);
                // We divide by 2 because we'll count each pair twice (once for "ab" and once for "ba")
                length += minPairs * 2 * 2;
                // Mark these as used to avoid double-counting
                freqMap.set(word, 0);
                freqMap.set(reversed, 0);
            }
        }
    }

    // Add 2 for the center if we have any remaining self-palindromic word
    if (hasCenter) {
        length += 2;
    }

    return length;
}