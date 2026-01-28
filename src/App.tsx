import styles from "./App.module.css";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";

export function App() {
    const handleSubmit = (data: { email: string; password: string }) => {
        console.log("Form submitted:", data);
    };

    return (
        <main className={styles.app}>
            <h1>Registration</h1>
            <RegistrationForm onSubmit={handleSubmit} />
        </main>
    );
}
