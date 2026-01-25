# Password Strength Indicator

**Time Limit:** 60 minutes
**Branch:** `main`
**StackBlitz:** [Open Exercise](https://stackblitz.com/github/nikbrunner/template-react-vite-vitest)
**Focus Areas:** useState, conditional rendering, basic RTL testing

## Core Requirements

Build a password input component with a real-time strength indicator.

### Functional (Must Have)

- [ ] Password input field (type="password")
- [ ] Toggle button to show/hide password (text changes: "Show"/"Hide")
- [ ] Strength indicator that updates as user types
- [ ] Strength displayed as text label ("Weak", "Medium", "Strong")
- [ ] Color-coded feedback (Red/Orange/Green)

### Strength Levels

| Level      | Criteria                                          | Color  |
| ---------- | ------------------------------------------------- | ------ |
| **Weak**   | < 6 characters                                    | Red    |
| **Medium** | 6+ chars with letters AND numbers                 | Orange |
| **Strong** | 8+ chars with letters, numbers, AND special chars | Green  |

Special characters: `!@#$%^&*()_+-=[]{};\|,.<>?`

## Core Tests (Must Have)

Create `PasswordStrength.test.tsx`:

- [ ] Renders input field
- [ ] Shows "Weak" for short passwords (< 6 chars)
- [ ] Shows "Medium" for alphanumeric passwords (6+ chars)
- [ ] Shows "Strong" for complex passwords (8+ chars with special)
- [ ] Show/hide toggle works correctly

## Optional (If Time Permits)

### Features

- [ ] Progress bar visual indicator
- [ ] Empty input shows no strength indicator
- [ ] Smooth color transitions

### Extra Tests

- [ ] Empty input shows appropriate default state

### Bonus Challenges

1. Add requirements checklist showing which criteria are met
2. Debounce the strength calculation
3. Add accessible announcements when strength changes
4. Create a password generator button

## File Structure

```
src/components/PasswordStrength/
├── PasswordStrength.tsx
├── PasswordStrength.module.css
└── PasswordStrength.test.tsx
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For             |
| ------------- | ------ | ---------------------------------- |
| Functionality | 30%    | All strength levels work correctly |
| Test Coverage | 30%    | Tests cover happy paths            |
| Code Quality  | 20%    | Clean state management             |
| CSS/Styling   | 20%    | Clear visual feedback              |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Strength calculation approach</summary>

Create a pure function to calculate strength:

```tsx
type Strength = "weak" | "medium" | "strong";

function calculateStrength(password: string): Strength {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);

    if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial) {
        return "strong";
    }
    if (password.length >= 6 && hasLetters && hasNumbers) {
        return "medium";
    }
    return "weak";
}
```

</details>

<details>
<summary>Hint 2: Testing user input</summary>

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("shows medium strength for alphanumeric password", async () => {
    const user = userEvent.setup();
    render(<PasswordStrength />);

    const input = screen.getByLabelText(/password/i);
    await user.type(input, "abc123");

    expect(screen.getByText(/medium/i)).toBeInTheDocument();
});
```

</details>

<details>
<summary>Hint 3: Show/hide toggle</summary>

```tsx
const [showPassword, setShowPassword] = useState(false);

<input
  type={showPassword ? 'text' : 'password'}
  // ...
/>
<button onClick={() => setShowPassword(prev => !prev)}>
  {showPassword ? 'Hide' : 'Show'}
</button>
```

</details>
