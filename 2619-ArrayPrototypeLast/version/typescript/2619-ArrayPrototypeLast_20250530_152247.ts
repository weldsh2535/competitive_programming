// Last updated: 30/05/2025, 15:22:47
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
}


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
