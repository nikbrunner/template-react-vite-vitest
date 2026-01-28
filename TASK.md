# Modal Component (Native Dialog)

**Time Limit:** 60 minutes
**Focus Areas:** Native `<dialog>` element, refs, imperative API, accessibility

## Core Requirements

Build an accessible modal dialog using the native HTML `<dialog>` element.

### Why `<dialog>`?

The native `<dialog>` element provides built-in:
- Focus trapping (focus stays inside modal)
- ESC key to close
- `::backdrop` pseudo-element for overlay
- Proper accessibility semantics

### Functional (Must Have)

- [ ] Use native `<dialog>` element
- [ ] Open modal via `dialogRef.current.showModal()`
- [ ] Close modal via `dialogRef.current.close()`
- [ ] Close on ESC key (built-in with `<dialog>`)
- [ ] Close on backdrop click
- [ ] Do NOT close when clicking inside modal content
- [ ] Render modal content via children prop

### Accessibility (Must Have)

- [ ] `aria-labelledby` pointing to modal title
- [ ] Close button with accessible label

### Visual (Must Have)

- Style the `::backdrop` pseudo-element
- Centered modal with reasonable max-width
- Close button (X) in header

## Core Tests (Must Have)

Create `Modal.test.tsx`:

- [ ] Does not render as open when isOpen=false
- [ ] Renders as open when isOpen=true
- [ ] Closes on backdrop click
- [ ] Does NOT close when clicking modal content
- [ ] Has correct accessibility attributes

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

| Criterion     | Weight | What We're Looking For                  |
| ------------- | ------ | --------------------------------------- |
| Functionality | 30%    | Proper use of dialog API                |
| Test Coverage | 30%    | Tests cover open/close and a11y         |
| Code Quality  | 20%    | Clean ref usage, proper effect cleanup  |
| CSS/Styling   | 20%    | Good modal UI, styled backdrop          |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Basic dialog ref pattern</summary>

```tsx
const dialogRef = useRef<HTMLDialogElement>(null);

useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
        dialog.showModal();
    } else {
        dialog.close();
    }
}, [isOpen]);

return (
    <dialog ref={dialogRef}>
        {/* content */}
    </dialog>
);
```

</details>

<details>
<summary>Hint 2: Backdrop click detection</summary>

```tsx
// The dialog element receives the click when clicking backdrop
// Check if the click target is the dialog itself (not its children)
const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
        onClose();
    }
};

<dialog ref={dialogRef} onClick={handleClick}>
    {/* content */}
</dialog>
```

</details>

<details>
<summary>Hint 3: Styling the backdrop</summary>

```css
.modal::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    border: none;
    border-radius: 8px;
    padding: 0;
    max-width: 500px;
    width: 90%;
}
```

</details>

<details>
<summary>Hint 4: Handling the close event</summary>

```tsx
// The dialog emits a 'close' event when closed (ESC key, etc.)
useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);

    return () => dialog.removeEventListener('close', handleClose);
}, [onClose]);
```

</details>

<details>
<summary>Hint 5: Testing dialog state</summary>

```tsx
test("opens modal when isOpen is true", () => {
    render(
        <Modal isOpen={true} onClose={vi.fn()} title="Test">
            Content
        </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
});
```

</details>

## Resources

- [MDN: `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [MDN: HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
