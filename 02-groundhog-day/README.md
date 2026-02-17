Today is Groundhog Day, in which a groundhog predicts the weather based on whether or not it sees its shadow.

Given a value representing the groundhog's appearance, return the correct prediction:

- If the given value is the boolean `true` (the groundhog saw its shadow), return `"Looks like we'll have six more weeks of winter."`.
- If the value is the boolean `false` (the groundhog did not see its shadow), return `"It's going to be an early spring."`.
- If the value is anything else (the groundhog did not show up), return `"No prediction this year."`.

## STEP-BY-STEP PROCESS

This is a classic **conditional logic + strict boolean checking** problem

### Step 1: Identify the three cases

There are **three mutually exclusive outcomes**:

1. **The value is the boolean `true`**
    - Groundhog saw its shadow
    - Return winter message
2. **The value is the boolean `false`**
    - Groundhog did not see its shadow
    - Return spring message
3. **Anything else**
    - Groundhog didn’t show up
    - Return no prediction message

---

### Step 2: Why we must check explicitly

Many languages treat values like `"True"`, `1`, or `" "` as “truthy”, but **this problem does NOT want truthy checks**.
