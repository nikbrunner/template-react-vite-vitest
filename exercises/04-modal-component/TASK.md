# Modal Component

**Time Limit:** 60 minutes
**Branch:** `main`
**StackBlitz:** [Open Exercise](https://stackblitz.com/github/nikbrunner/template-react-vite-vitest)
**Focus Areas:** Accessibility, keyboard handling, event management

## Core Requirements

Build an accessible modal dialog component.

### Functional (Must Have)

- [ ] Open/close modal via `isOpen` prop
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
- [ ] `aria-describedby` pointing to modal content
- [ ] Smooth open/close transitions
- [ ] Prevent body scroll when modal is open

### Extra Tests

- [ ] Focus moves to modal on open
- [ ] Focus returns to trigger on close

### Bonus Challenges

1. Add animation for open/close (CSS transitions)
2. Support multiple modal sizes (sm/md/lg)
3. Add Portal rendering to document.body

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
src/
├── components/
│   └── Modal/
│       ├── Modal.tsx
│       ├── Modal.module.css
│       └── Modal.test.tsx
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                |
| ------------- | ------ | ------------------------------------- |
| Functionality | 30%    | Open/close behavior works correctly   |
| Test Coverage | 30%    | Tests cover keyboard, click, and a11y |
| Code Quality  | 20%    | Clean event handling, proper cleanup  |
| CSS/Styling   | 20%    | Usable modal UI, proper layering      |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Escape key handling</summary>

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
<summary>Hint 2: Overlay click vs content click</summary>

```tsx
// Stop propagation on content to prevent overlay click
<div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
    </div>
</div>
```

</details>

<details>
<summary>Hint 3: Testing keyboard events</summary>

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
<summary>Hint 4: Testing accessibility attributes</summary>

```tsx
test("has correct accessibility attributes", () => {
    render(
        <Modal isOpen={true} onClose={vi.fn()} title="Test Modal">
            Content
        </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby");
});
```

</details>

<details>
<summary>Hint 5: Focus trap (if doing optional)</summary>

```tsx
const modalRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (isOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
        }
    }
}, [isOpen]);
```

</details>
