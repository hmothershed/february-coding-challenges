# February 12th: **2026 Winter Games (Day 7: Speed Skating)**

Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.

### *example tests:*

1. `largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30])` should return `3`.
2. `largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23])` should return `1`.
3. `largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95])` should return `5`.
4. `largest_difference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01])` should return `2`.
5. `largest_difference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10])` should return `4`.

## STEP-BY-STEP PROCESS

### Step 1: Understand the Goal

You are given:

```
skater1 = [lap1, lap2, lap3, ...]
skater2 = [lap1, lap2, lap3, ...]
```

You must:

1. Compare lap times at each index
2. Compute the **absolute difference**
3. Find the lap where that difference is largest
4. Return the **lap number** (1-based index!)

Important:

- Lap numbers start at **1**
- Arrays use **0-based indexing**

### Step 2: What Does “Largest Difference” Mean?

For each lap:

```
difference = abs(skater1[i] - skater2[i])
```

We track:

- `maxDifference`
- `lapNumber`

Whenever we find a bigger difference → update both.

**Step-by-Step Logic**

1. Initialize
    1. `maxDiff = -Infinity`    OR   `max_diff = float(’-inf’)`
    2. lapNumber
2. Loop through arrays
3. Compute absolute difference
4. Update if larger
5. Return lapNumber
