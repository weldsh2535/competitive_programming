// Last updated: 26/05/2025, 14:28:11
type Fn = (...params: number[]) => number

function memoize(fn: (...args: any[]) => any): {
    (...args: any[]): any;
    getCallCount: () => number;
} {
    const cache = new Map<string, any>();
    let callCount = 0;

    const memoizedFn = (...args: any[]) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

    memoizedFn.getCallCount = () => callCount;
    return memoizedFn;
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */