function digitalDetox(logs) {
// pair each log with its parsed time
    const entries = logs.map(log => ({
        raw: log,
        time: new Date(log.replace(" ", "T"))
    }));

// sort by time
    entries.sort((a, b) => a.time - b.time);

    const fourHours = 4 * 60 * 60 * 1000;

    // Rule 1: no more than one login within any 4-hour period
    for (let i = 1; i < entries.length; i++) {
        if (entries[i].time - entries[i - 1].time < fourHours) {
            return false;
        }
    }

    // Rule 2: no more than 2 logins per day
    const dailyCounts = {};
    for (let entry of entries) {
        const day = entry.raw.slice(0, 10); // YYYY-MM-DD
        dailyCounts[day] = (dailyCounts[day] || 0) + 1;

        if (dailyCounts[day] > 2) {
            return false;
        }
    }

    return true;
}
