import styles from "./TodoList.module.css";

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type Filter = "all" | "active" | "completed";

interface TodoListProps {
    // TODO: Define props if needed (e.g., initial todos, onChange callback)
}

export function TodoList(props: TodoListProps) {
    // TODO: Implement todo list with CRUD operations and filtering
    // - Add new todos via text input + submit
    // - Mark todos as complete/incomplete (toggle)
    // - Delete individual todos
    // - Filter todos by status: All / Active / Completed
    // - Show count of remaining active todos

    return (
        <div className={styles.container}>
            <h1>Todo List</h1>
            {/* TODO: Add input form for new todos */}
            {/* TODO: Add filter buttons (All / Active / Completed) */}
            {/* TODO: Add todo list */}
            {/* TODO: Add items left counter */}
        </div>
    );
}
