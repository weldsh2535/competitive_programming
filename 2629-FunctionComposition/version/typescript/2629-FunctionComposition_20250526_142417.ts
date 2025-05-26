// Last updated: 26/05/2025, 14:24:17
type F = (x: number) => number;

function compose(functions: F[]): F {
    
   return function(x: number): number {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */