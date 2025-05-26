// Last updated: 26/05/2025, 14:31:36
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return Promise.all([promise1, promise2])
        .then(([val1, val2]) => val1 + val2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */