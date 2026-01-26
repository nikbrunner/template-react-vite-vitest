import styles from "./PasswordStrength.module.css";

export type Strength = "weak" | "medium" | "strong";

interface PasswordStrengthProps {
    // TODO: Define props if needed (e.g., onChange callback)
}

export function PasswordStrength(props: PasswordStrengthProps) {
    // TODO: Implement password input with strength indicator
    // - Password input field (type="password")
    // - Toggle button to show/hide password
    // - Strength indicator that updates as user types
    // - Color-coded feedback (Red/Orange/Green)

    return (
        <div className={styles.container}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
            {/* TODO: Add show/hide toggle button */}
            {/* TODO: Add strength indicator */}
        </div>
    );
}
