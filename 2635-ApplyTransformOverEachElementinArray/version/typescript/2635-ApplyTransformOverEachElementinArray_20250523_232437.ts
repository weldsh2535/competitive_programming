// Last updated: 23/05/2025, 23:24:37
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};