import { useState } from "react";

import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

export function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={styles.app}>
            <h1>Dialog Modal</h1>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Example Modal"
            >
                <p>This modal uses the native &lt;dialog&gt; element.</p>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal>
        </main>
    );
}
