# February 7th: **2026 Winter Games (Day 2: Snowboarding)**

Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

- A snowboarder's stance is either `"Regular"` or `"Goofy"`.
- Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
- The landing stance flips every 180 degrees of rotation.

For example, given `"Regular"` and `90`, return `"Regular"`. Given `"Regular"` and `180` degrees, return `"Goofy"`.

### *example tests:*

1. `getLandingStance("Regular", 90)` should return `"Regular"`.
2. `getLandingStance("Regular", 180)` should return `"Goofy"`.
3. `getLandingStance("Goofy", -270)` should return `"Regular"`.
4. `get_landing_stance("Regular", 2340)` should return `"Goofy"`.
5. `get_landing_stance("Goofy", 2160)` should return `"Goofy"`.
6. `get_landing_stance("Goofy", -540)` should return `"Regular"`.

## STEP-BY-STEP PROCESS

This problem is really about **pattern recognition + modular arithmetic**

### Step 1: Understand the Core Rule

The landing stance flips every **180 degrees**. That’s the entire problem. It doesn’t matter if rotation is positive or negative, how large the number is, or how many spins happen. The only thing that matters is **How many 180° turns occurred?**

### Step 2: What Actually Changes the Stance?

Every 180°:

- Regular ↔ Goofy (flip)

Every 360°:

- Flip twice → back to original stance

So:

We only care if the number of 180° rotations is **odd or even**.

### Step 3: Convert Rotation to “Number of 180s”

If odd → flip 

If even → keep same stance

**`IMPORTANT: HANDLE NEGATIVE ROATATIONS JUST THE SAME. -180 IS STILL ONE 180° TURN AND A -540 IS THREE 180° TURNS, SO WE USE ABSOLUTE VALUE`**
