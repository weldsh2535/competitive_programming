// Last updated: 30/05/2025, 15:18:36
class TimeLimitedCache {

    private cache: Map<number, { value: number; expiresAt: number }> = new Map();

    set(key: number, value: number, duration: number): boolean {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key)!.expiresAt > now;

        this.cache.set(key, {
            value,
            expiresAt: now + duration
        });

        return exists;
    }

    get(key: number): number {
        const now = Date.now();
        const entry = this.cache.get(key);

        if (!entry || entry.expiresAt <= now) {
            this.cache.delete(key);
            return -1;
        }

        return entry.value;
    }

    count(): number {
        const now = Date.now();
        let count = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.expiresAt > now) {
                count++;
            } else {
                this.cache.delete(key); // Clean up expired keys
            }
        }

        return count;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */