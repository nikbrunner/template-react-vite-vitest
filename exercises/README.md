# Interview Practice System

Structured exercises for Proton frontend interview preparation. Each exercise runs in StackBlitz, reviews happen locally after downloading your completed work.

## Quick Start

1. **Start an exercise:** `/practice start 01`
2. **Code in StackBlitz** (timed)
3. **Download your work** as zip when done
4. **Review:** `/practice review 01`

## Branch Strategy

| Branch          | StackBlitz URL                                                                                               | Use For                            |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `main`          | [Open in StackBlitz](https://stackblitz.com/github/nikbrunner/template-react-vite-vitest)                    | Exercises 01-04 (no data fetching) |
| `with-ts-query` | [Open in StackBlitz](https://stackblitz.com/github/nikbrunner/template-react-vite-vitest/tree/with-ts-query) | Exercises 05-07 (async data)       |

**What's included:**

- **main:** React, Vitest, React Testing Library, CSS Modules, cva
- **with-ts-query:** Above + TanStack Query, user API setup

## Exercises

| #   | Exercise                                              | Difficulty | Time   | Branch        | Focus                          |
| --- | ----------------------------------------------------- | ---------- | ------ | ------------- | ------------------------------ |
| 01  | [Password Strength](./01-password-strength/TASK.md)   | ⭐         | 60 min | main          | State, conditional rendering   |
| 02  | [Todo List + Filters](./02-todo-list-filters/TASK.md) | ⭐⭐       | 60 min | main          | Array methods, filtering       |
| 03  | [Form Validation](./03-form-validation/TASK.md)       | ⭐⭐       | 60 min | main          | Forms, validation, errors      |
| 04  | [Modal Component](./04-modal-component/TASK.md)       | ⭐⭐       | 60 min | main          | Accessibility, keyboard        |
| 05  | [User Directory](./05-user-directory/TASK.md)         | ⭐⭐⭐     | 60 min | with-ts-query | Async data, loading states     |
| 06  | [Shopping Cart](./06-shopping-cart/TASK.md)           | ⭐⭐⭐     | 60 min | with-ts-query | State management, calculations |
| 07  | [Data Table](./07-data-table/TASK.md)                 | ⭐⭐⭐⭐   | 75 min | with-ts-query | Sorting, pagination, CSS Grid  |

## Workflow

### Starting an Exercise

```
/practice start 03
```

This will:

1. Display the TASK.md requirements
2. Open the correct StackBlitz link in your browser
3. Start your timer (honor system)

### During the Exercise

- Read requirements carefully before coding
- Write tests as you go
- Focus on functionality first, polish second
- Don't look at hints unless truly stuck

### After Completion

1. Download your project as a zip from StackBlitz
2. Return to Claude Code
3. Run `/practice review 03`
4. Provide the path to your zip file
5. Receive detailed feedback with corrected examples

## Review Files

Each exercise has a `reviews/` folder. After each attempt, a dated review file is created:

```
exercises/03-form-validation/reviews/2025-01-25.md
```

This lets you track progress over multiple attempts.

## Adaptive Practice

After each review, you can:

- **Repeat** - Same exercise, clean slate, aim for better score
- **Vary** - New requirements added to the same exercise
- **Extend** - Build on your previous solution
- **Move on** - Progress to the next exercise

Focus on weak areas identified in reviews.

## Tips for Interview Success

1. **Read requirements completely** before writing code
2. **Start with the test file** - know what you're building toward
3. **Commit small** - show your thought process
4. **Name things well** - reviewers read your code
5. **Don't over-engineer** - solve the stated problem
6. **Manage your time** - working code beats perfect code

## Status

Check your overall progress:

```
/practice status
```
