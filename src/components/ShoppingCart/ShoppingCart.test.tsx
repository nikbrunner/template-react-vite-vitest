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
        // TODO
    });

    test("renders products after fetch", async () => {
        // TODO
    });

    test("can add product to cart", async () => {
        // TODO
    });

    test("can increment/decrement quantity", async () => {
        // TODO
    });

    test("calculates subtotal correctly", async () => {
        // TODO
    });

    test("shows empty cart message when empty", () => {
        // TODO
    });
});
