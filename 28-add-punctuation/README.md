# February 28th: **Add Punctuation**
Given a string of sentences with missing periods, add a period (`"."`) in the following places:

- Before each space that comes immediately before an uppercase letter
- And at the end of the string

Return the resulting string.

### *example tests:*

1. `add_punctuation("Hello world")` should return `"Hello world."` .
2. `add_punctuation("Hello world It's nice today")` should return `"Hello world. It's nice today."` .
3. `add_punctuation("JavaScript is great Sometimes")` should return `"JavaScript is great. Sometimes."` .
4. `addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z")` should return `"A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."` .
5. `addPunctuation("Wait.. For it")` should return `"Wait... For it."` .

## STEP-BY-STEP PROCESS

#### Step 1: Loop through the string

#### Step 2: Look for this pattern:

- `" "` (space) followed by an **uppercase letter**

#### Step 3: Insert `"."` before that space

#### Step 4: Add `"."` at the end
