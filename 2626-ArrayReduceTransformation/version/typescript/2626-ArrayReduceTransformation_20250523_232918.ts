// Last updated: 23/05/2025, 23:29:18
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accumulator = init;
    for (const num of nums) {
        accumulator = fn(accumulator, num);
    }
    return accumulator;
};