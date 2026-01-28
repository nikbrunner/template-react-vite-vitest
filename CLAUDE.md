# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This repo is a **frontend interview practice system**. It provides:

1. A minimal React + Vitest template optimized for StackBlitz (`main` branch)
2. Seven exercise branches with structured scaffolding and requirements
3. A `/practice` skill for managing exercise workflow (start, review, status)

The template itself is intentionally minimal - just enough to demonstrate patterns (cva, CSS Modules, hook testing) without bloat.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Type-check and build
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

Run a single test file:

```bash
npx vitest run src/components/Button/Button.test.tsx
```

Run tests matching a pattern:

```bash
npx vitest run -t "toggles value"
```

## Stack

- React 19 + TypeScript
- Vite 7 for dev/build
- Vitest with happy-dom (not jsdom - required for StackBlitz compatibility)
- React Testing Library with jest-dom matchers
- CSS Modules for styling
- class-variance-authority (cva) for component variants

## Testing Conventions

Tests use explicit imports (no globals):

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
```

Test setup (`src/test/setup.ts`) auto-imports jest-dom matchers and runs cleanup after each test.

For hooks, use `renderHook` and `act`:

```tsx
import { act, renderHook } from "@testing-library/react";
```

## Component Pattern

Components use cva with CSS Modules for variants:

```tsx
const buttonVariants = cva(styles.button, {
    variants: {
        variant: { primary: styles.primary, secondary: styles.secondary },
        size: { sm: styles.sm, md: styles.md, lg: styles.lg }
    },
    defaultVariants: { variant: "primary", size: "md" }
});
```

## Practice Skill

Use `/practice` for exercises:

- `/practice start 01` - Start exercise, opens StackBlitz with scaffolding
- `/practice review 01` - Review completed zip, creates feedback file
- `/practice status` - Show progress across all exercises

## Exercise Branches

Each exercise has its own branch with:
- TASK.md at root (visible in StackBlitz)
- Component scaffold in `src/components/<Name>/`
- Empty test stubs to fill in
- `reviews/` folder for storing review feedback

| Branch | TanStack Query | Notes |
|--------|----------------|-------|
| `exercise/01-password-strength` | No | |
| `exercise/02-todo-list` | No | |
| `exercise/03-form-validation` | No | `isEmail()` utility provided |
| `exercise/04a-dialog-modal` | No | Native `<dialog>` element |
| `exercise/04b-portal-modal` | No | React `createPortal` |
| `exercise/05-user-directory` | Yes | |
| `exercise/06-shopping-cart` | Yes | `formatPrice()` utility provided |
| `exercise/07-data-table` | Yes | |
