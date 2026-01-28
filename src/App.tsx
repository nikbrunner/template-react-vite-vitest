import styles from "./App.module.css";
import { TodoList } from "./components/TodoList/TodoList";

export function App() {
    return (
        <main className={styles.app}>
            <TodoList />
        </main>
    );
}
