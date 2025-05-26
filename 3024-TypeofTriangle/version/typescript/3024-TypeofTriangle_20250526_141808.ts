// Last updated: 26/05/2025, 14:18:08
function triangleType(nums: number[]): string {
    const [a, b, c] = nums;
    // Check if the sides can form a triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }
    // Determine the type of triangle
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
};