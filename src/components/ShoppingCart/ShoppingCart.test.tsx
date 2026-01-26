import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { ShoppingCart } from "./ShoppingCart";

// Helper to create a fresh QueryClient for each test
const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false }
        }
    });

// Wrapper component for tests
function TestWrapper({ children }: { children: React.ReactNode }) {
    return <QueryClientProvider client={createTestQueryClient()}>{children}</QueryClientProvider>;
}

describe("ShoppingCart", () => {
    test("shows loading state while fetching products", () => {
        // TODO: Implement
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders products after fetch", async () => {
        // TODO: Implement
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // expect(await screen.findByText("Wireless Headphones")).toBeInTheDocument();
        // expect(screen.getByText("$79.99")).toBeInTheDocument();
    });

    test("can add product to cart", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // const addButton = await screen.findByRole("button", { name: /add to cart/i });
        // await user.click(addButton);
        // // Verify item appears in cart
    });

    test("can increment/decrement quantity", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // // Add a product first
        // // Then test increment/decrement buttons
    });

    test("calculates subtotal correctly", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // // Add products and verify subtotal
    });

    test("shows empty cart message when empty", () => {
        // TODO: Implement
        // render(<ShoppingCart />, { wrapper: TestWrapper });
        // expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
    });
});
