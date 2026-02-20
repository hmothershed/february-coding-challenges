Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

- The two words will be separated by a single space.

Valid first words:

- `"Misty"`
- `"Ghost"`
- `"Thunder"`
- `"Solar"`
- `"Sky"`
- `"Phantom"`
- `"Frozen"`
- `"Polar"`

Valid second words:

- `"Twister"`
- `"Icequake"`
- `"Avalanche"`
- `"Vortex"`
- `"Snowstorm"`
- `"Frostbite"`
- `"Blizzard"`
- `"Shadow"`

### *example tests:*

1. `isValidTrick("Polar Vortex")` should return `true`.
2. `isValidTrick("Solar Icequake")` should return `true`.
3. `isValidTrick("Thunder Blizzard")` should return `true`.
4. `isValidTrick("Phantom Frostbite")` should return `true`.
5. `is_valid_trick("Ghost Avalanche")` should return `True`.
6. `is_valid_trick("Snowstorm Shadow")` should return `False`.
7. `is_valid_trick("Solar Sky")` should return `False`.

## STEP-BY-STEP PROCESS

**Understand the Goal**

You must: 

1. Split the string into two words
2. Check the validity of the two words

**Identify the Best Data Structure**

&nbsp;&nbsp;&nbsp;&nbsp;Using a set would be the best option because of the fast lookup and cleaner than arrays/lists

**Store the Valid Words in Sets**

&nbsp;&nbsp;&nbsp;&nbsp;First words → Set A            &nbsp;&nbsp;&nbsp;&nbsp;Second words → Set B

**Split the Input**

&nbsp;&nbsp;&nbsp;&nbsp;`“Polar Vortex” → [”Polar”, “Vortex”]`

**Validate**

&nbsp;&nbsp;&nbsp;&nbsp;if word1 in firstWords **AND** word2 in secondWords → TRUE
  
&nbsp;&nbsp;&nbsp;&nbsp;else → FALSE
