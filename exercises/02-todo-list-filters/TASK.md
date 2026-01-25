# Todo List with Filters

**Time Limit:** 60 minutes
**Branch:** `main`
**StackBlitz:** [Open Exercise](https://stackblitz.com/github/nikbrunner/template-react-vite-vitest)
**Focus Areas:** Array methods, list rendering, key props, state management

## Core Requirements

Build a todo list with CRUD operations and filtering.

### Functional (Must Have)

- [ ] Add new todos via text input + submit
- [ ] Mark todos as complete/incomplete (toggle)
- [ ] Delete individual todos
- [ ] Filter todos by status: All / Active / Completed
- [ ] Show count of remaining active todos ("X items left")
- [ ] Clear input after adding a todo

### Data Structure

```tsx
interface Todo {
    id: string;
    text: string;
    completed: boolean;
}
```

### Visual (Must Have)

- Visual distinction between completed and active todos (strikethrough or opacity)
- Active filter button should be visually highlighted

## Core Tests (Must Have)

Create `TodoList.test.tsx`:

- [ ] Can add a new todo
- [ ] Can toggle todo completion
- [ ] Can delete a todo
- [ ] Filters work correctly (shows/hides based on filter)
- [ ] Counter shows correct number

## Optional (If Time Permits)

### Features

- [ ] Persist todos to localStorage
- [ ] Load todos from localStorage on mount
- [ ] "Clear completed" button
- [ ] Render empty state when no todos

### Extra Tests

- [ ] Renders empty state correctly
- [ ] Todos persist to localStorage (mock localStorage)

### Bonus Challenges

1. Double-click to edit todo text
2. Drag and drop to reorder
3. Add due dates to todos

## File Structure

```
src/
├── components/
│   └── TodoList/
│       ├── TodoList.tsx
│       ├── TodoList.module.css
│       └── TodoList.test.tsx
├── hooks/
│   └── useLocalStorage.ts (optional)
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                   |
| ------------- | ------ | ---------------------------------------- |
| Functionality | 30%    | CRUD + filter operations work            |
| Test Coverage | 30%    | Tests cover interactions                 |
| Code Quality  | 20%    | Clean array operations, proper key usage |
| CSS/Styling   | 20%    | Usable UI, clear visual states           |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Filtering logic</summary>

```tsx
type Filter = "all" | "active" | "completed";

const filteredTodos = useMemo(() => {
    switch (filter) {
        case "active":
            return todos.filter(todo => !todo.completed);
        case "completed":
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}, [todos, filter]);
```

</details>

<details>
<summary>Hint 2: Count active items</summary>

```tsx
const activeCount = todos.filter(todo => !todo.completed).length;

// Or with reduce
const activeCount = todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
```

</details>

<details>
<summary>Hint 3: localStorage hook (if doing optional)</summary>

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}
```

</details>

<details>
<summary>Hint 4: queryBy for asserting absence</summary>

```tsx
// Use queryBy when element might not exist
test("completed filter hides active todos", async () => {
    // ... setup with one active, one completed todo

    await user.click(screen.getByRole("button", { name: /completed/i }));

    expect(screen.queryByText("Active todo")).not.toBeInTheDocument();
    expect(screen.getByText("Completed todo")).toBeInTheDocument();
});
```

</details>
