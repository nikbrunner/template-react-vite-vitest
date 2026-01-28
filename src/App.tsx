import styles from "./App.module.css";
import { PasswordStrength } from "./components/PasswordStrength/PasswordStrength";

export function App() {
    return (
        <main className={styles.app}>
            <h1>Password Strength</h1>
            <PasswordStrength />
        </main>
    );
}
