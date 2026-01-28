import type { ReactNode } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // TODO: Implement modal using native <dialog> element
    // - Use useRef to get a reference to the dialog
    // - Call dialogRef.current.showModal() when isOpen becomes true
    // - Call dialogRef.current.close() when isOpen becomes false
    // - Handle backdrop click (click on dialog element itself, not children)
    // - Listen for 'close' event to sync with onClose callback

    return (
        <dialog className={styles.modal} aria-labelledby="modal-title">
            <header className={styles.header}>
                <h2 id="modal-title">{title}</h2>
                {/* TODO: Add close button */}
            </header>
            <div className={styles.content}>{children}</div>
        </dialog>
    );
}
