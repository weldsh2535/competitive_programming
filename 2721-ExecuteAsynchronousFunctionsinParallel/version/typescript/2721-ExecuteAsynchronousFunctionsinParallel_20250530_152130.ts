// Last updated: 30/05/2025, 15:21:30
type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        let completed = 0;
        const total = functions.length;

        functions.forEach((fn, index) => {
            try {
                fn().then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === total) {
                        resolve(results);
                    }
                }).catch((err) => {
                    reject(err); 
                });
            } catch (err) {
                reject(err); 
            }
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */