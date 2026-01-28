import type { ReactNode } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // TODO: Implement modal using createPortal
    // - Use createPortal to render to document.body
    // - Add useEffect for Escape key listener
    // - Handle overlay click vs content click
    // - Add proper ARIA attributes

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <header className={styles.header}>
                    <h2 id="modal-title">{title}</h2>
                    {/* TODO: Add close button */}
                </header>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
