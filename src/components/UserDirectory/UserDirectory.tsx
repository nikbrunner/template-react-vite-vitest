import type { User } from "../../api/users";

import styles from "./UserDirectory.module.css";

interface UserDirectoryProps {
    // TODO: Define props if needed
}

export function UserDirectory(props: UserDirectoryProps) {
    // TODO: Implement user directory with TanStack Query
    // - Fetch users from API on mount using useQuery
    // - Show loading state while fetching
    // - Show error state if fetch fails
    // - Display user list (name, email)
    // - Search/filter users by name (client-side)

    return (
        <div className={styles.container}>
            <h1>User Directory</h1>
            {/* TODO: Add search input */}
            {/* TODO: Add loading state */}
            {/* TODO: Add error state */}
            {/* TODO: Add user list */}
        </div>
    );
}
