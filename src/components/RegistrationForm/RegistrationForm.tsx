import styles from "./RegistrationForm.module.css";

export interface FormData {
    email: string;
    password: string;
}

interface RegistrationFormProps {
    onSubmit: (data: FormData) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
    // TODO: Implement registration form with validation
    // - Email field (required, valid email format)
    // - Password field (required, min 8 chars)
    // - Confirm Password field (required, must match password)
    // - Validate on blur
    // - Show inline error messages
    // - Submit button disabled until form is valid

    return (
        <form className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                {/* TODO: Show email error if touched and invalid */}
            </div>

            <div className={styles.field}>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                {/* TODO: Show password error if touched and invalid */}
            </div>

            <div className={styles.field}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" />
                {/* TODO: Show confirm password error if touched and doesn't match */}
            </div>

            <button type="submit" disabled>
                Register
            </button>
        </form>
    );
}
