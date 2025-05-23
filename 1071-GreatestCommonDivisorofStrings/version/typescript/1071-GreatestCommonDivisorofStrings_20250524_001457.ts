// Last updated: 24/05/2025, 00:14:57
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}