# Interview Practice System

Structured exercises for frontend interview preparation. Each exercise runs in StackBlitz, reviews happen locally after downloading your completed work.

## Quick Start

1. **Start an exercise:** `/practice start 01`
2. **Code in StackBlitz** (timed)
3. **Download your work** as zip when done
4. **Review:** `/practice review 01`

## Branch-Based System

Each exercise has its own Git branch with:

- **TASK.md at root** - Requirements visible in StackBlitz
- **Component scaffolding** - Interfaces, TODO comments, empty test stubs
- **Exercise-specific setup** - TanStack Query for exercises 05-07

### StackBlitz URL Pattern

```
https://stackblitz.com/fork/github/nikbrunner/template-react-vite-vitest/tree/exercise/<number>-<name>
```

## Exercises

| #   | Exercise          | Difficulty | Time   | Branch                            | Focus                          |
| --- | ----------------- | ---------- | ------ | --------------------------------- | ------------------------------ |
| 01  | Password Strength | ⭐         | 60 min | `exercise/01-password-strength`   | State, conditional rendering   |
| 02  | Todo List         | ⭐⭐       | 60 min | `exercise/02-todo-list`           | Array methods, filtering       |
| 03  | Form Validation   | ⭐⭐       | 60 min | `exercise/03-form-validation`     | Forms, validation, errors      |
| 04  | Modal Component   | ⭐⭐       | 60 min | `exercise/04-modal-component`     | Accessibility, keyboard        |
| 05  | User Directory    | ⭐⭐⭐     | 60 min | `exercise/05-user-directory`      | Async data, loading states     |
| 06  | Shopping Cart     | ⭐⭐⭐     | 60 min | `exercise/06-shopping-cart`       | State management, calculations |
| 07  | Data Table        | ⭐⭐⭐⭐   | 75 min | `exercise/07-data-table`          | Sorting, pagination, CSS Grid  |

## What's Included in Each Branch

**Exercises 01-04 (basic):**
- React, Vitest, React Testing Library, CSS Modules, cva
- Component scaffold with types and TODO comments

**Exercises 05-07 (async):**
- Above + TanStack Query with QueryClientProvider
- Mock API with sample data

## Workflow

### Starting an Exercise

```
/practice start 03
```

This will:

1. Show you the requirements
2. Open the correct StackBlitz link in your browser
3. Start your timer (honor system)

### During the Exercise

In StackBlitz you'll find:
- TASK.md at root with full requirements
- Component scaffold in `src/components/<Name>/`
- Empty test stubs to fill in

Tips:
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

Reviews are stored locally in this repo:

```
exercises/<exercise-name>/reviews/YYYY-MM-DD.md
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
