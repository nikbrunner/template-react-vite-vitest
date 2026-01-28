/**
 * Formatting utilities.
 * These are provided as part of the exercise scaffolding.
 */

/**
 * Formats a price in cents to a currency string.
 * @param cents - The price in cents
 * @returns Formatted price string (e.g., "$79.99")
 */
export function formatPrice(cents: number): string {
    return `$${(cents / 100).toFixed(2)}`;
}
