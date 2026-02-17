# February 3rd: **String Mirror**

Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.

### *example tests:*

1. `mirror("freeCodeCamp")` should return `"freeCodeCamppmaCedoCeerf"`.
2. `mirror("RaceCar")` should return `"RaceCarraCecaR"`.
3. `mirror("helloworld")` should return `"helloworlddlrowolleh"`.
4. `mirror("The quick brown fox...")` should return `"The quick brown fox......xof nworb kciuq ehT"`.

## STEP-BY-STEP PROCESS

This is a **string manipulation + reversal** problem. 

1. Keep the original string **as-is**
2. Create a **reversed copy** of that same string
3. **Append** the reversed copy to the end of the original
4. Return the final combined string

So the model to remember is: **Original → Mirror → Glue together**
