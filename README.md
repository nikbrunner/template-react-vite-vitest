# template-react-vite-vitest

A minimal React + TypeScript + Vite template with Vitest and React Testing Library pre-configured.

[Open in Stackblitz](https://stackblitz.com/fork/github/nikbrunner/template-react-vite-vitest)

## Stack

- **React 19** with TypeScript
- **Vite** for development and bundling
- **Vitest** with jsdom environment
- **React Testing Library** with jest-dom matchers
- **class-variance-authority (cva)** for component variants
- **CSS Modules** for styling

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component
├── App.module.css        # App styles
├── App.test.tsx          # App tests
├── vite-env.d.ts         # Vite type declarations
├── test/
│   └── setup.ts          # Test setup (cleanup, jest-dom)
├── hooks/
│   ├── useToggle.ts      # Example custom hook
│   └── useToggle.test.ts # Hook tests with renderHook
└── components/
    └── Button/
        ├── Button.tsx        # Example component with cva
        ├── Button.module.css # Button styles
        └── Button.test.tsx   # Button tests
```

## Testing

Tests use explicit imports from vitest (no globals):

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
```

The setup file (`src/test/setup.ts`) handles:
- Importing `@testing-library/jest-dom/vitest` matchers
- Automatic cleanup after each test

## Testing Hooks

The `useToggle` hook demonstrates testing with `renderHook` and `act`:

```ts
import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useToggle } from "./useToggle";

test("toggles value", () => {
  const { result } = renderHook(() => useToggle());

  act(() => {
    result.current.toggle();
  });

  expect(result.current.value).toBe(true);
});
```

## Component Variants with cva

The Button component demonstrates cva usage with CSS Modules:

```tsx
const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
```
