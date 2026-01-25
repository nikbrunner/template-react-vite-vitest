---
name: practice
description: This skill should be used when the user says "/practice", "start exercise", "review exercise", "practice status", or wants to work on interview preparation exercises.
version: 1.0.0
---

# Practice Skill

Interview practice system for frontend exercises.

## Commands

- `/practice start <number>` - Start an exercise session
- `/practice review <number>` - Review a completed exercise from a downloaded zip
- `/practice status` - Show progress across all exercises

---

## On `/practice start <number>`

1. **Read the TASK.md file** for the specified exercise number from the `exercises/` folder.

2. **Display the requirements** clearly:
    - Time limit
    - Requirements checklist
    - Test requirements
    - Evaluation criteria

3. **Provide the correct StackBlitz link:**
    - Exercises 01-04: `https://stackblitz.com/github/nikbrunner/template-react-vite-vitest`
    - Exercises 05-07: `https://stackblitz.com/github/nikbrunner/template-react-vite-vitest/tree/with-ts-query`

4. **Open the link** in the browser.

5. **Remind the user:**
    - Start timer when ready
    - Download as zip when done
    - Return and run `/practice review <number>`

---

## On `/practice review <number>`

1. **Ask for the zip file path** if not provided.

2. **Extract and analyze the code:**
    - Extract to a temp directory
    - Read all relevant source files (components, tests, styles)

3. **Evaluate against criteria:**
    - **Functionality (30%):** Does it meet all requirements?
    - **Test Coverage (30%):** Are tests comprehensive and correct?
    - **Code Quality (20%):** Clean code, proper patterns?
    - **CSS/Styling (20%):** Reasonable UI, proper CSS techniques?

4. **Create a dated review file** in `exercises/<exercise>/reviews/YYYY-MM-DD.md`:

````markdown
# Review: [Exercise Name] - YYYY-MM-DD

**Score:** X/10
**Time:** (if user mentioned it)

## What Worked Well

- Bullet points of positives

## Issues Found

### Issue 1: [Description]

```tsx
// User's code
...
```
````

**Problem:** Explain what's wrong
**Fix:**

```tsx
// Corrected code
...
```

## Patterns to Practice

- Pattern name: `example code snippet`

## Interview Readiness

- [ ] Ready to move on
- [ ] Needs one more attempt
- [ ] Review fundamentals first

## Recommended Next Steps

- Specific suggestions based on the review

```

5. **Suggest next action:**
   - Repeat same exercise (if score < 7)
   - Move to next exercise (if score >= 7)
   - Try a variation (if specific weak area identified)

---

## On `/practice status`

1. **Check the reviews folder** for each exercise.

2. **Display a progress table:**

| # | Exercise | Attempts | Best Score | Status |
|---|----------|----------|------------|--------|
| 01 | Password Strength | 2 | 8/10 | Passed |
| 02 | Todo List | 0 | - | Not started |

3. **Recommend** which exercise to work on next.

---

## Exercise Reference

| # | Name | Time | Branch |
|---|------|------|--------|
| 01 | Password Strength | 60 min | main |
| 02 | Todo List + Filters | 60 min | main |
| 03 | Form Validation | 60 min | main |
| 04 | Modal Component | 60 min | main |
| 05 | User Directory | 60 min | with-ts-query |
| 06 | Shopping Cart | 60 min | with-ts-query |
| 07 | Data Table | 75 min | with-ts-query |
```
