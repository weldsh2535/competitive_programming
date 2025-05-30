// Last updated: 30/05/2025, 15:24:51
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
};