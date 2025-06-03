// Last updated: 03/06/2025, 14:12:56
function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
    let totalCandies = 0;
    const ownedBoxes = new Set<number>(initialBoxes);
    const availableKeys = new Set<number>();
    const queue: number[] = [];

    // Initial processing: add all initially open boxes to the queue
    for (const box of initialBoxes) {
        if (status[box] === 1) {
            queue.push(box);
        }
    }

    while (queue.length > 0) {
        const currentBox = queue.shift()!;
        if (!ownedBoxes.has(currentBox)) {
            continue; // Skip if we no longer own this box (shouldn't happen due to how we manage ownership)
        }

        // Collect candies
        totalCandies += candies[currentBox];
        ownedBoxes.delete(currentBox);

        // Add keys from this box
        for (const key of keys[currentBox]) {
            availableKeys.add(key);
            // If we have the box and can now open it, add to queue
            if (ownedBoxes.has(key) && status[key] === 0) {
                status[key] = 1; // Mark as open
                queue.push(key);
            }
        }

        // Add contained boxes
        for (const newBox of containedBoxes[currentBox]) {
            ownedBoxes.add(newBox);
            // If the box is open or we have a key, add to queue
            if (status[newBox] === 1 || availableKeys.has(newBox)) {
                if (availableKeys.has(newBox)) {
                    status[newBox] = 1; // Mark as open if we have the key
                }
                queue.push(newBox);
            }
        }
    }

    return totalCandies;
};