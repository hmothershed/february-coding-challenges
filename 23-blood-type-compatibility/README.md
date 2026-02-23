# February 23rd: **Blood Type Compatibility**

Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

- A letter: `"A"`, `"B"`, `"AB"`, or `"O"`
- And an Rh factor: `"+"` or `"-"`

Blood types will be one of the valid letters followed by an Rh factor. For example, `"AB+"` and `"O-"` are valid blood types.

Letter Rules:

- `"O"` can donate to other letter type.
- `"A"` can donate to `"A"` and `"AB"`.
- `"B"` can donate to `"B"` and `"AB"`.
- `"AB"` can donate only to `"AB"`.

Rh Rules:

- Negative (`"-"`) can donate to both `"-"` and `"+"`.
- Positive (`"+"`) can donate only to `"+"`.

Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

### *example tests:*

1. `can_donate("B+", "B+")` should return `True`.
2. `can_donate("O-", "AB-")` should return `True`.
3. `can_donate("O+", "A-")` should return `False`.
4. `can_donate("A+", "AB+")` should return `True`.
5. `can_donate("A-", "B-")` should return `False`.
6. `canDonate("B-", "AB+")` should return `true`.
7. `canDonate("B-", "A+")` should return `false`.
8. `canDonate("O-", "O+")` should return `true`.
9. `canDonate("O+", "O-")` should return `false`.
10. `canDonate("AB+", "AB-")` should return `false`.

## STEP-BY-STEP PROCESS
### Step 1: Parse the Blood Type

each input looks like this:

```
"AB+" --> letter = "AB", rh = "+"
"O-" ---> letter = "O", rh = "-"
```

so the goal is to separate the blood type from the rh factor but keep in mind that the blood type AB+/- has a length of 3 characters while the others only have 2

### Step 2: Encode the Rules

**Letter Compatibility**

```
O  -> can donate to: A, B, AB, O
A  -> A, AB
B  -> B, AB
AB -> AB
```

**Rh Compatibility**

```
- -> can donate to -, +
+ -> can donate to +
```

### Step 3: Combine the Checks

return (letter valid) AND (rh valid)
