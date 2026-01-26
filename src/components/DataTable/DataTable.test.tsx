import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { DataTable } from "./DataTable";

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

describe("DataTable", () => {
    test("shows loading state while fetching", () => {
        // TODO: Implement
        // render(<DataTable />, { wrapper: TestWrapper });
        // expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders data in table format", async () => {
        // TODO: Implement
        // render(<DataTable />, { wrapper: TestWrapper });
        // expect(await screen.findByText("Alice Johnson")).toBeInTheDocument();
        // expect(screen.getByText("alice@example.com")).toBeInTheDocument();
    });

    test("sorts by column on header click", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<DataTable />, { wrapper: TestWrapper });
        // await screen.findByText("Alice Johnson");
        // await user.click(screen.getByText("Name"));
        // // Verify sort order changed
    });

    test("reverses sort on second click", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<DataTable />, { wrapper: TestWrapper });
        // await screen.findByText("Alice Johnson");
        // await user.click(screen.getByText("Name"));
        // await user.click(screen.getByText("Name"));
        // // Verify sort order reversed
    });

    test("pagination controls work correctly", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<DataTable />, { wrapper: TestWrapper });
        // await screen.findByText("Page 1 of 3");
        // await user.click(screen.getByRole("button", { name: /next/i }));
        // expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
    });

    test("shows correct page info", async () => {
        // TODO: Implement
        // render(<DataTable />, { wrapper: TestWrapper });
        // expect(await screen.findByText(/page 1 of/i)).toBeInTheDocument();
    });
});
