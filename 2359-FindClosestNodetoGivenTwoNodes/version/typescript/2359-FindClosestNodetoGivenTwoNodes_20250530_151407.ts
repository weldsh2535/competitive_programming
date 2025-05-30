// Last updated: 30/05/2025, 15:14:07
function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const n = edges.length;

    const getDistances = (start: number): number[] => {
        const dist = Array(n).fill(-1);
        let current = start, distance = 0;

        while (current !== -1 && dist[current] === -1) {
            dist[current] = distance++;
            current = edges[current];
        }

        return dist;
    };

    const dist1 = getDistances(node1);
    const dist2 = getDistances(node2);

    let minDistance = Infinity;
    let result = -1;

    for (let i = 0; i < n; i++) {
        if (dist1[i] !== -1 && dist2[i] !== -1) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDistance || (maxDist === minDistance && i < result)) {
                minDistance = maxDist;
                result = i;
            }
        }
    }

    return result;
};