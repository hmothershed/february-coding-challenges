# February 24th: **Business Day Count**

Given a start date and an end date, return the number of business days between the two.

- Given dates are in the format `"YYYY-MM-DD"`.
- Weekdays are business days (Monday through Friday).
- Weekends are not business days (Saturday and Sunday).
- Include both the start and end dates when counting.

### *example tests:*

1. `countBusinessDays("2026-02-24", "2026-02-26")` should return `3`.
2. `countBusinessDays("2026-02-24", "2026-02-28")` should return `4`.
3. `countBusinessDays("2026-02-21", "2026-03-01")` should return `5`.
4. `count_business_days("2026-03-08", "2026-03-17")` should return `7`.
5. `count_business_days("2026-02-24", "2027-02-24")` should return `262`.

## STEP-BY-STEP PROCESS

#### Step 1: Convert strings → date objects

- JS uses `Date` and Python uses `datetime, timedelta` for date manipulation

#### Step 2: Loop from start to end

- Be sure to include both start and end date

#### Step 3: Check if current day is weekday

- Monday - Friday are the weekdays, do not include Saturday and Sunday since they are weekends
- To get the weekdays, JS uses `getDay()` method and Python uses `.weekday()`

#### Step 4: Increment counter

#### Step 5: Move to next day
