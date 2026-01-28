import { useState } from "react";

import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

export function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={styles.app}>
            <h1>Portal Modal</h1>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Example Modal"
            >
                <p>This modal uses createPortal to render to document.body.</p>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal>
        </main>
    );
}
