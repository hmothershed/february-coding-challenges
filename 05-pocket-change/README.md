# February 5th: **Pocket Change**

Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format `"$D.CC"`.

- 100 cents equals 1 dollar.
- In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

### *example tests:*

1. `count_change([25, 10, 5, 1])` should return `“$0.41”`.
2. `count_change([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])` should return `“$1.43”`.
3. `count_change([100, 25, 100, 1000, 5, 500, 2000, 25])` should return `"$37.55"`.
4. `countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10])` should return `"$0.70"`.
5. `countChange([1])` should return `"$0.01"`.
6. `countChange([25, 25, 25, 25])` should return `"$1.00"`.

## STEP-BY-STEP PROCESS

We’re combining **arrays + math + formatting**… the kind of things that might sneak in an interview so pay attention to details

### Step 1: Understand the Problem

You must:

1. Add all cents
2. Convert to dollars
3. Return formatted as: `"$D.CC"`

### Step 2: Strategy

**Step-by-Step logic:**

1. Add all numbers in array
2. Convert cents → dollars
3. Format output string correctly
