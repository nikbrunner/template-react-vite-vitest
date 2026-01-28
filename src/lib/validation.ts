/**
 * Validation utilities for form inputs.
 * These are provided as part of the exercise scaffolding.
 */

/**
 * Validates an email address format.
 * @param email - The email string to validate
 * @returns true if the email format is valid
 */
export function isEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
