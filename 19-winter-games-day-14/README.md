# February 19th: **2026 Winter Games (Day 14: Ski Mountaineering)**
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

- The snow depth values are `"Shallow"`, `"Moderate"`, or `"Deep"`.
- Slope values are `"Gentle"`, `"Steep"`, or `"Very Steep"`.

Return `"Safe"` or `"Risky"` based on this table:

|  | **`"Shallow"`** | **`"Moderate"`** | **`"Deep"`** |
| --- | --- | --- | --- |
| `"Gentle"` | `"Safe"` | `"Safe"` | `"Safe"` |
| `"Steep"` | `"Safe"` | `"Risky"` | `"Risky"` |
| `"Very Steep"` | `"Safe"` | `"Risky"` | `"Risky"` |

### *example tests:*

1. `avalancheRisk("Shallow", "Gentle")` should return `"Safe"`.
2. `avalancheRisk("Shallow", "Steep")` should return `"Safe"`.
3. `avalancheRisk("Shallow", "Very Steep")` should return `"Safe"`.
4. `avalancheRisk("Moderate", "Gentle")` should return `"Safe"`.
5. `avalanche_risk("Moderate", "Steep")` should return `"Risky"`.
6. `avalanche_risk("Moderate", "Very Steep")` should return `"Risky"`.
7. `avalanche_risk("Deep", "Gentle")` should return `"Safe"`.
8. `avalanche_risk("Deep", "Steep")` should return `"Risky"`.
9. `avalanche_risk("Deep", "Very Steep")` should return `"Risky"`.

## STEP-BY-STEP PROCESS

### Step 1: Understand the Table

The table has only one key rule: It is **“Risky” only when slope is NOT “Gentle” AND snow is NOT “Shallow”**. Otherwise → **“Safe”**

- `"Gentle"` slope → always `"Safe"`
- `"Shallow"` snow → always `"Safe"`
- Only risky combo:
    - `"Moderate"` or `"Deep"` **AND**
    - `"Steep"` or `"Very Steep"`
