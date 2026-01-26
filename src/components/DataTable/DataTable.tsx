import type { User } from "../../api/data";

import styles from "./DataTable.module.css";

export interface SortConfig {
    key: keyof User;
    direction: "asc" | "desc";
}

interface DataTableProps {
    // TODO: Define props if needed (e.g., pageSize)
}

export function DataTable(props: DataTableProps) {
    // TODO: Implement sortable, paginated data table
    // - Fetch data from API on mount using TanStack Query
    // - Display data in CSS Grid table format
    // - Sortable columns (click header to sort)
    // - Pagination with Previous/Next controls
    // - Show loading and error states

    return (
        <div className={styles.container}>
            <h1>Data Table</h1>
            {/* TODO: Add loading state */}
            {/* TODO: Add error state */}

            <div className={styles.table}>
                {/* TODO: Add header row with sortable columns */}
                {/* TODO: Add data rows */}
            </div>

            {/* TODO: Add pagination controls */}
            {/* TODO: Add page info ("Page X of Y") */}
        </div>
    );
}
