## February 1st: **Digital Detox**

Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format `"YYYY-MM-DD HH:mm:ss"`.

You have met your digital detox goal if both of the following statements are true:

- You logged in no more than once within any four-hour period.
- You logged in no more than 2 times on any single day.

### *example tests:*

1. `digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"])` should return `true`.
2. `digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"])` should return `false`.
3. `digitalDetox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"])` should return `true`.
4. `digital_detox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"])` should return `False`.
5. `digital_detox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"])` should return `True`.
6. `digital_detox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"])` should return `False`.

## STEP-BY-STEP PROCESS

This is a **date/time + sorting + constraint-checking** problem. We’re given an **array/list of login timestamps** as strings. We must decide whether **both rules** are satisfied:

1. **4-hour rule**
    
    You logged in **no more than once within any 4-hour window** → Any two logins must be **at least 4 hours apart**
    
2. **Daily rule**
    
    You logged in **no more than 2 times on the same calendar day**
    

If either rule is broken → `false`. If both pass → `true`

---

**Step 1: Convert strings into date/time objects**

The strings look like: “YYYY-MM-DD HH:mm:ss” . To compare times properly, we must turn them into real date objects

**Step 2: Sort the logs chronologically**

The logs **may not be in order**.

Sorting is critical because:

- The 4-hour rule only needs to compare **neighboring logins**
- Time differences make sense only in order

**Step 3: Check the 4-hour rule**

Once sorted:

- Compare each login with the previous one
- If the time difference is **less than 4 hours**, fail immediately

4 hours =

- **Python:** `4 * 60 * 60` seconds
- **JavaScript:** `4 * 60 * 60 * 1000` milliseconds

**Step 4: Check the daily rule**

We need to count logins **per calendar day**:

- Extract the `YYYY-MM-DD` part
- Keep a count per day
- If any day exceeds **2 logins**, fail

**Step 5: If nothing fails, return** `true`
