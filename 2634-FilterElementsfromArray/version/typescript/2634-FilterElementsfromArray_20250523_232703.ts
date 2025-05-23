// Last updated: 23/05/2025, 23:27:03
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};