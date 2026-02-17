# February 10th: **2026 Winter Games (Day 5: Cross-Country Skiing)**

Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

- Given times are strings in `"H:MM:SS"` format.
- Given times will be in order from fastest to slowest.
- The winners time (fastest time) should correspond to `"0"`.
- Each other time should show the time behind the winner, in the format `"+M:SS"`.

For example, given `["1:25:32", "1:26:10", "1:27:05"]`, return `["0", "+0:38", "+1:33"]`

### *example tests:*

1. `getRelativeResults(["1:25:32", "1:26:10", "1:27:05"])` should return `["0", "+0:38", "+1:33"]`.
2. `getRelativeResults(["1:00:01", "1:00:05", "1:00:10"])` should return `["0", "+0:04", "+0:09"]`.
3. `getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"])` should return `["0", "+0:17", "+0:42", "+2:05"]`.
4. `getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"])` should return `["0", "+0:02", "+1:01", "+2:17", "+2:45", "+3:03", "+3:59", "+4:18", "+7:06", "+13:07"]`.
5. `getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"])` should return `["0", "+9:30", "+9:38", "+9:49", "+10:40", "+12:12", "+13:15", "+13:55"]`.

## STEP-BY-STEP PROCESS

This is a clean time-parsing problem, combining **string parsing + arithmetic + formatting**

### Step 1: Understand the Goal

You’re given:

```
["H:MM:SS","H:MM:SS", ...]
```

Already sorted from fastest → slowest.

You must:

1. Convert each time into total seconds
2. Compare each time to the winner (first time)
3. Compute difference
4. Format difference as:

```
"0"forwinner"+M:SS"foreveryoneelse
```

Important:

- Always 2 digits for seconds (`+0:04`, not `+0:4`)
- Minutes can be any length

### Step 2: Convert Time String → Seconds

Given:

```
"H:MM:SS"
```

Split by `":"`

Example:

```
"1:25:32" → ["1","25","32"]
```

Convert to numbers:

```
total_seconds = H*3600 + M*60 + S
```

### Step 3: Subtract Winner’s Time

Let:

```
winner_seconds = first_time_in_seconds
```

For every time:

```
difference = current_seconds - winner_seconds
```

Winner:

```
difference = 0 → return"0"
```

### Step 4: Convert Difference Back to M:SS

Since we only show minutes and seconds behind:

```
minutes = difference // 60
seconds = difference % 60
```

Format:

```
"+" + minutes +":" +seconds (2 digits)
```
