# First Non-Repeating Character in a String (JavaScript)

This program finds the **first character that appears only once** in a string.

## Problem Description

Given a string, find the first character that occurs **only once**.  
Example:


Step by step:

- 'a' → appears 2 times → skip  
- 'b' → appears 2 times → skip  
- 'c' → appears 1 time → ✅ answer

---

## How It Works

We use:

1. `indexOf(char)` → first position of the character  
2. `lastIndexOf(char)` → last position of the character  

**Rule:** If `indexOf(char) === lastIndexOf(char)` → character appears only once

---

## Code

```javascript
let input = "aabbcdeff";
let result = -1;

for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (input.indexOf(ch) === input.lastIndexOf(ch)) {
        result = ch;
        break;
    }
}

console.log(result); // Output: "c"
