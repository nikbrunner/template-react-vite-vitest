# Form Validation

**Time Limit:** 60 minutes
**Focus Areas:** Controlled forms, validation logic, error states, getByRole

## Core Requirements

Build a registration form with real-time validation and submit handling.

### Form Fields

| Field            | Type     | Validation Rules              |
| ---------------- | -------- | ----------------------------- |
| Email            | email    | Required, valid email format  |
| Password         | password | Required, min 8 chars         |
| Confirm Password | password | Required, must match password |

### Functional (Must Have)

- [ ] All fields are controlled inputs
- [ ] Validate on blur (when field loses focus)
- [ ] Show inline error messages below invalid fields
- [ ] Submit button disabled until form is valid
- [ ] On submit, call onSubmit callback with form data

### Visual (Must Have)

- Error messages displayed below the relevant field
- Submit button visually disabled when form is invalid

## Core Tests (Must Have)

Create `RegistrationForm.test.tsx`:

- [ ] Renders all form fields
- [ ] Shows email error for invalid format
- [ ] Shows confirm password error when doesn't match
- [ ] Submit button is disabled when form is invalid
- [ ] Submit button is enabled when form is valid
- [ ] Calls onSubmit with form data when submitted

## Optional (If Time Permits)

### Features

- [ ] Password must contain at least one number
- [ ] Clear form after successful submission
- [ ] Success message after submission
- [ ] Red border on invalid fields
- [ ] Green border on valid fields

### Extra Tests

- [ ] Shows password error for too short
- [ ] Shows password error for missing number (if implementing)
- [ ] Clears form after successful submission

### Bonus Challenges

1. Add password strength indicator (reuse exercise 01!)
2. Add "show password" toggles
3. Add username field with async uniqueness check (mock)

## Component API

```tsx
interface FormData {
    email: string;
    password: string;
}

interface RegistrationFormProps {
    onSubmit: (data: FormData) => void;
}

<RegistrationForm onSubmit={data => console.log(data)} />;
```

## Provided Utilities

An `isEmail()` function is provided in `src/lib/validation.ts` - use it for email validation.

## File Structure

```
src/
├── lib/
│   ├── validation.ts          # isEmail() provided
│   └── validation.test.ts     # Tests for validation utils
├── components/
│   └── RegistrationForm/
│       ├── RegistrationForm.tsx
│       ├── RegistrationForm.module.css
│       └── RegistrationForm.test.tsx
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                           |
| ------------- | ------ | ------------------------------------------------ |
| Functionality | 30%    | Validation rules work correctly                  |
| Test Coverage | 30%    | Tests cover validation and submission            |
| Code Quality  | 20%    | Clean validation logic, proper controlled inputs |
| CSS/Styling   | 20%    | Clear error states                               |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Form state structure</summary>

```tsx
interface FormState {
    values: {
        email: string;
        password: string;
        confirmPassword: string;
    };
    errors: {
        email?: string;
        password?: string;
        confirmPassword?: string;
    };
    touched: {
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
    };
}
```

</details>

<details>
<summary>Hint 2: Using the provided isEmail utility</summary>

```tsx
import { isEmail } from "../../lib/validation";

// Use in validation logic
if (!isEmail(values.email)) {
    errors.email = "Invalid email format";
}
```

</details>

<details>
<summary>Hint 3: Testing form inputs with getByRole</summary>

```tsx
test("shows error for invalid email", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm onSubmit={vi.fn()} />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "notanemail");
    await user.tab(); // triggers blur

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
});
```

</details>

<details>
<summary>Hint 4: Validation on blur pattern</summary>

```tsx
const handleBlur = (field: keyof FormState["values"]) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field);
};

// Show error only if touched
{
    touched.email && errors.email && <span className={styles.error}>{errors.email}</span>;
}
```

</details>

<details>
<summary>Hint 5: Checking form validity</summary>

```tsx
const isFormValid = useMemo(() => {
    const { email, password, confirmPassword } = values;
    return isValidEmail(email) && password.length >= 8 && password === confirmPassword;
}, [values]);
```

</details>
