// Last updated: 31/05/2025, 08:22:09
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const idMap = new Map<number, any>();

    // Process arr1: add all objects to the map
    for (const obj of arr1) {
        idMap.set(obj.id, { ...obj });
    }

    // Process arr2: merge with existing objects or add new ones
    for (const obj of arr2) {
        if (idMap.has(obj.id)) {
            const existingObj = idMap.get(obj.id);
            // Merge properties, with arr2 overriding arr1
            for (const key in obj) {
                existingObj[key] = obj[key];
            }
        } else {
            idMap.set(obj.id, { ...obj });
        }
    }

    // Convert map values to array and sort by id
    const result = Array.from(idMap.values());
    result.sort((a, b) => a.id - b.id);

    return result;
};