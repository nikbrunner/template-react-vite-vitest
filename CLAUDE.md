# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This repo is a **frontend interview practice system**. It provides:

1. A minimal React + Vitest template optimized for StackBlitz
2. Timed exercises in `exercises/` covering React patterns, testing, and UI implementation
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

- `/practice start 01` - Start exercise, opens StackBlitz
- `/practice review 01` - Review completed zip, creates feedback file
- `/practice status` - Show progress across all exercises

Exercises 01-04 use `main` branch. Exercises 05-07 use `with-ts-query` branch (adds TanStack Query).
