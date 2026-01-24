import { useState } from "react";

import styles from "./App.module.css";
import { Button } from "./components/Button/Button";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <main className={styles.app}>
            <h1>Vite App</h1>
            <p>Count: {count}</p>
            <div className={styles.buttons}>
                <Button onClick={() => setCount(c => c + 1)}>Increment</Button>
                <Button variant="secondary" onClick={() => setCount(0)}>
                    Reset
                </Button>
            </div>
        </main>
    );
}
