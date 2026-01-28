# Modal Component (React Portal)

**Time Limit:** 60 minutes
**Focus Areas:** `createPortal`, event handling, keyboard events, accessibility

## Core Requirements

Build an accessible modal dialog using React's `createPortal` to render outside the component hierarchy.

### Why Portal?

Using `createPortal` ensures the modal:
- Escapes parent `overflow: hidden` or `z-index` stacking contexts
- Renders at the top level of the DOM (typically `document.body`)
- Maintains React event bubbling despite being in a different DOM location

### Functional (Must Have)

- [ ] Render modal content to `document.body` using `createPortal`
- [ ] Close on Escape key press
- [ ] Close on overlay (backdrop) click
- [ ] Do NOT close when clicking inside modal content
- [ ] Render modal content via children prop

### Accessibility (Must Have)

- [ ] `role="dialog"` on modal container
- [ ] `aria-modal="true"` when open
- [ ] `aria-labelledby` pointing to modal title

### Visual (Must Have)

- Semi-transparent overlay behind modal
- Centered modal with reasonable max-width
- Close button (X) in top-right corner

## Core Tests (Must Have)

Create `Modal.test.tsx`:

- [ ] Does not render when closed (isOpen=false)
- [ ] Renders when open
- [ ] Closes on Escape key press
- [ ] Closes on overlay click
- [ ] Does NOT close when clicking modal content
- [ ] Has correct accessibility attributes (role, aria-modal)

## Optional (If Time Permits)

### Features

- [ ] Trap focus inside modal when open
- [ ] Return focus to trigger element on close
- [ ] Prevent body scroll when modal is open
- [ ] Smooth open/close transitions

### Extra Tests

- [ ] Focus moves to modal on open
- [ ] Focus returns to trigger on close

### Bonus Challenges

1. Add animation for open/close (CSS transitions)
2. Support multiple modal sizes (sm/md/lg)
3. Create a reusable portal target hook

## Component API

```tsx
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

// Usage
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Open Modal</button>

<Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Confirm Action"
>
    <p>Are you sure you want to proceed?</p>
    <button onClick={() => setIsOpen(false)}>Cancel</button>
    <button onClick={handleConfirm}>Confirm</button>
</Modal>
```

## File Structure

```
src/components/Modal/
├── Modal.tsx
├── Modal.module.css
└── Modal.test.tsx
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                |
| ------------- | ------ | ------------------------------------- |
| Functionality | 30%    | Portal rendering, keyboard, clicks    |
| Test Coverage | 30%    | Tests cover keyboard, click, and a11y |
| Code Quality  | 20%    | Clean event handling, proper cleanup  |
| CSS/Styling   | 20%    | Usable modal UI, proper layering      |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Basic portal pattern</summary>

```tsx
import { createPortal } from "react-dom";

function Modal({ isOpen, children }: ModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>,
        document.body
    );
}
```

</details>

<details>
<summary>Hint 2: Escape key handling</summary>

```tsx
useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
}, [isOpen, onClose]);
```

</details>

<details>
<summary>Hint 3: Overlay click vs content click</summary>

```tsx
// Stop propagation on content to prevent overlay click
<div className={styles.overlay} onClick={onClose}>
    <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
    >
        {children}
    </div>
</div>
```

</details>

<details>
<summary>Hint 4: Testing keyboard events</summary>

```tsx
test("closes on Escape key", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
        <Modal isOpen={true} onClose={onClose} title="Test">
            Content
        </Modal>
    );

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
});
```

</details>

<details>
<summary>Hint 5: Prevent body scroll (optional)</summary>

```tsx
useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    }
    return () => {
        document.body.style.overflow = "";
    };
}, [isOpen]);
```

</details>

## Resources

- [React: createPortal](https://react.dev/reference/react-dom/createPortal)
- [MDN: ARIA dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
