// Last updated: 23/05/2025, 23:38:45
function numberOfUniqueGoodSubsequences(binary: string): number {
    const MOD = 1e9 + 7;
    let endsWith0 = 0;
    let endsWith1 = 0;
    let hasZero = false;

    for (const c of binary) {
        if (c === '1') {
            endsWith1 = (endsWith0 + endsWith1 + 1) % MOD;
        } else {
            endsWith0 = (endsWith0 + endsWith1) % MOD;
            hasZero = true;
        }
    }

    const total = (endsWith0 + endsWith1) % MOD;
    return hasZero ? (total + 1) % MOD : total;
}