# February 4th: **Truncate the Text**

Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append `"..."` to the end of it (so it's 20 characters total) and return the result.

### *example tests:*

1. `truncate_text("Hello, world!")` should return `"Hello, world!"`.
2. `truncate_text("This string should get truncated.")` should return `"This string shoul..."`.
3. `truncateText("Exactly twenty chars")` should return `"Exactly twenty chars"`.
4. `truncateText(".....................")` should return `"...................."`.

## STEP-BY-STEP PROCESS

This is a clean little string problem that tests precision and understanding of slicing.

### Step 1: Understand the Rules Clearly

**Requirement:**

- If string length ≤ 20 → return it unchanged
- If string length > 20 →
    - Take first 17 characters, Add `“…”` , and then the total length becomes 20

### Step 2: Identify What We Need

**Key operations:**

- Get string length
    - JS: `text.length` Python: `len(text)`
- Compare length to 20
- Slice the string
    - JS: `slice(start,end)` Python: `text[start:end]`
- Concatenate strings
