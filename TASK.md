# Data Table

**Time Limit:** 75 minutes
**Focus Areas:** Sorting, pagination, CSS Grid, complex state

## Core Requirements

Build a sortable, paginated data table.

### Functional (Must Have)

- [ ] Fetch data from API on mount
- [ ] Display data in table format (columns: Name, Email, Role, Status)
- [ ] Sortable columns (click header to sort, click again to reverse)
- [ ] Show sort direction indicator (arrow or similar)
- [ ] Pagination with Previous/Next controls
- [ ] Page info display ("Page X of Y")
- [ ] Show loading and error states

### Data Structure

```tsx
interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user" | "guest";
    status: "active" | "inactive";
}

interface SortConfig {
    key: keyof User;
    direction: "asc" | "desc";
}
```

### Visual (Must Have)

- Table layout using CSS Grid (not `<table>` element)
- Clickable column headers
- Disabled pagination buttons at boundaries
- Clear visual hierarchy

## Core Tests (Must Have)

Create `DataTable.test.tsx`:

- [ ] Shows loading state while fetching
- [ ] Renders data in table format
- [ ] Sorts by column on header click
- [ ] Reverses sort on second click
- [ ] Pagination controls work correctly
- [ ] Shows correct page info

## Optional (If Time Permits)

### Features

- [ ] Search/filter across all columns
- [ ] Configurable page size (10/25/50)
- [ ] Highlighted active sort column
- [ ] Reset to page 1 when search changes

### Extra Tests

- [ ] Search filters results
- [ ] Page size selector works

### Bonus Challenges

1. Column visibility toggles
2. Row selection with checkboxes
3. Inline cell editing
4. Export to CSV
5. Sticky header on scroll

## File Structure

```
src/
├── components/
│   └── DataTable/
│       ├── DataTable.tsx
│       ├── DataTable.module.css
│       ├── DataTable.test.tsx
│       ├── TableHeader.tsx (optional)
│       └── Pagination.tsx (optional)
├── api/
│   └── data.ts (provided in branch)
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                         |
| ------------- | ------ | ---------------------------------------------- |
| Functionality | 30%    | Sort and pagination work                       |
| Test Coverage | 30%    | Tests cover sorting and pagination logic       |
| Code Quality  | 20%    | Clean state management, separation of concerns |
| CSS/Styling   | 20%    | Proper grid layout, usable table UI            |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Sort state and logic</summary>

```tsx
const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "name",
    direction: "asc"
});

const handleSort = (key: keyof User) => {
    setSortConfig(prev => ({
        key,
        direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
};

const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
    });
}, [data, sortConfig]);
```

</details>

<details>
<summary>Hint 2: Pagination logic</summary>

```tsx
const [page, setPage] = useState(0);
const pageSize = 10;

const totalPages = Math.ceil(sortedData.length / pageSize);
const paginatedData = sortedData.slice(page * pageSize, (page + 1) * pageSize);

const canGoPrev = page > 0;
const canGoNext = page < totalPages - 1;
```

</details>

<details>
<summary>Hint 3: CSS Grid table layout</summary>

```css
.table {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    gap: 1px;
    background-color: var(--border-color);
}

.headerCell,
.cell {
    background-color: var(--bg-color);
    padding: 12px 16px;
}

.headerCell {
    font-weight: 600;
    cursor: pointer;
    user-select: none;
}

.headerCell:hover {
    background-color: var(--hover-color);
}
```

</details>

<details>
<summary>Hint 4: Testing sort</summary>

```tsx
test("sorts by column on header click", async () => {
    const user = userEvent.setup();
    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <DataTable />
        </QueryClientProvider>
    );

    // Wait for data
    await screen.findByText("Alice");

    // Click name header to sort
    await user.click(screen.getByText("Name"));

    // Verify sort order changed (first item should be different)
    const cells = screen.getAllByRole("cell");
    // Assert based on your mock data
});
```

</details>

<details>
<summary>Hint 5: Testing pagination</summary>

```tsx
test("pagination controls work", async () => {
    const user = userEvent.setup();
    // Mock enough data for multiple pages
    vi.mocked(api.fetchData).mockResolvedValue(generateUsers(25));

    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <DataTable />
        </QueryClientProvider>
    );

    await screen.findByText("Page 1 of 3");

    // Go to next page
    await user.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
});
```

</details>
