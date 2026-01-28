import styles from "./App.module.css";
import { UserDirectory } from "./components/UserDirectory/UserDirectory";

export function App() {
    return (
        <main className={styles.app}>
            <UserDirectory />
        </main>
    );
}
