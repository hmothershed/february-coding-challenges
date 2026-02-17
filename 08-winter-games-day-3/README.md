# February 8th: **2026 Winter Games (Day 3: Biathlon)**

Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

- Each round consists of 5 targets.
- Each missed target results in a 150 meter penalty loop.

### *example tests:*

1. `calculatePenaltyDistance([4, 4])` should return `300`.
2. `calculatePenaltyDistance([5, 5])` should return `0`.
3. `calculatePenaltyDistance([4, 5, 3, 5])` should return `450`.
4. `calculate_penalty_distance([5, 4, 5, 5])` should return `150`.
5. `calculate_penalty_distance([4, 3, 0, 3])` should return `1500`.

## STEP-BY-STEP PROCESS

### Step 1: Understand the Rules

Each round:

- Has **5 targets**
- The number in the array = how many targets were **hit**
- Missed targets = `5 - hits`
- Each missed target = **150 meters penalty**

So per round: `penalty = (5 - hits) * 150`

Total penalty distance: `sum of penalties for all rounds`

### Step 2: Break Into Logical Steps

Given: `rounds = [4, 5, 3, 5]`

For each round:

1. Compute misses: `5 - roundScore`
2. Multiply by 150
3. Add to total
