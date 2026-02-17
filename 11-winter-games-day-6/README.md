# February 11th: **2026 Winter Games (Day 6: Figure Skating)**

Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.

### *example tests:*

1. `computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)` should return `64`.
2. `computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])` should return `80`.
3. `computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)` should return `67`.
4. `compute_score([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0)` should return `67.5`.
5. `compute_score([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5)` should return `59`.

## STEP-BY-STEP PROCESS

His is a real interview style problem that deals with arrays, edge-case thinking, and rest paramaters

### Step 1: Understand the Rules

**Requirements:**

1. There are **10 judge scores**
2. Remove the **highest and lowest**
3. Sum the remaining **8 scores** → base score
4. Subtract all penalties
5. Return the final score

### Step 2: Break the Problem Into Steps

1. Find the highest score
2. Find the lowest score
3. Remove ONE occurrence of each
4. Sum the remaining 8
5. Sum the penalties
6. Subtract the penalties from base

`IMPORTANT!!!! IF HIGHEST AND LOWEST APPEARS MULTIPLE TIMES ONLY REMOVE ONE`
