import styles from "./App.module.css";
import { DataTable } from "./components/DataTable/DataTable";

export function App() {
    return (
        <main className={styles.app}>
            <DataTable />
        </main>
    );
}
