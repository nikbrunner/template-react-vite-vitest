# User Directory

**Time Limit:** 60 minutes
**Focus Areas:** TanStack Query, async testing, loading/error states, findBy queries

## Core Requirements

Build a user directory that fetches users from an API with search functionality.

### Functional (Must Have)

- [ ] Fetch users from API on mount using TanStack Query
- [ ] Display user list (name, email)
- [ ] Show loading state while fetching
- [ ] Show error state if fetch fails
- [ ] Search/filter users by name (client-side)

### API

This branch includes TanStack Query and a mock API setup. Use:

```tsx
import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../../api/users";

const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
});
```

**User shape:**

```tsx
interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}
```

### Visual (Must Have)

- Loading indicator while fetching
- User cards/list with name and email
- Search input at the top

## Core Tests (Must Have)

Create `UserDirectory.test.tsx`:

- [ ] Shows loading state initially
- [ ] Renders users after successful fetch
- [ ] Shows error state on fetch failure
- [ ] Search filters users correctly

## Optional (If Time Permits)

### Features

- [ ] Display user avatars
- [ ] Show "No users found" for empty search results
- [ ] Retry button on error state
- [ ] Empty state styling

### Extra Tests

- [ ] Shows empty state for no search results
- [ ] Retry button refetches data

### Bonus Challenges

1. Add pagination (load more button)
2. Add sorting by name/email
3. Add user detail modal on click
4. Implement debounced search

## File Structure

```
src/
├── components/
│   └── UserDirectory/
│       ├── UserDirectory.tsx
│       ├── UserDirectory.module.css
│       └── UserDirectory.test.tsx
├── api/
│   └── users.ts (provided in branch)
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For             |
| ------------- | ------ | ---------------------------------- |
| Functionality | 30%    | Data fetching, search, states work |
| Test Coverage | 30%    | Async tests with proper waiting    |
| Code Quality  | 20%    | Clean TanStack Query usage         |
| CSS/Styling   | 20%    | Good loading/error UX              |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Basic TanStack Query setup</summary>

```tsx
import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../../api/users";

function UserDirectory() {
    const {
        data: users,
        isLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading users</div>;

    return <UserList users={users} />;
}
```

</details>

<details>
<summary>Hint 2: Client-side filtering</summary>

```tsx
const [search, setSearch] = useState("");

const filteredUsers = useMemo(() => {
    if (!users) return [];
    if (!search) return users;

    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
}, [users, search]);
```

</details>

<details>
<summary>Hint 3: Testing async with findBy</summary>

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { render, screen } from "@testing-library/react";

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false }
        }
    });

test("renders users after fetch", async () => {
    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <UserDirectory />
        </QueryClientProvider>
    );

    // findBy automatically waits
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
});
```

</details>

<details>
<summary>Hint 4: Mocking API for tests</summary>

```tsx
import { vi } from "vitest";

import * as api from "../../api/users";

vi.mock("../../api/users");

test("shows error state on fetch failure", async () => {
    vi.mocked(api.fetchUsers).mockRejectedValue(new Error("Network error"));

    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <UserDirectory />
        </QueryClientProvider>
    );

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
});
```

</details>

<details>
<summary>Hint 5: Testing loading state</summary>

```tsx
test("shows loading state initially", () => {
    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <UserDirectory />
        </QueryClientProvider>
    );

    // Loading state appears synchronously
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
```

</details>
