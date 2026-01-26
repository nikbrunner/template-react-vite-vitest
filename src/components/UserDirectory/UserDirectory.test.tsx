import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { UserDirectory } from "./UserDirectory";

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

describe("UserDirectory", () => {
    test("shows loading state initially", () => {
        // TODO: Implement
        // render(<UserDirectory />, { wrapper: TestWrapper });
        // expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders users after successful fetch", async () => {
        // TODO: Implement
        // render(<UserDirectory />, { wrapper: TestWrapper });
        // // Use findBy to wait for async content
        // expect(await screen.findByText("John Doe")).toBeInTheDocument();
        // expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    });

    test("shows error state on fetch failure", async () => {
        // TODO: Implement
        // Mock the fetchUsers function to reject
        // vi.mock("../../api/users");
        // vi.mocked(fetchUsers).mockRejectedValue(new Error("Network error"));
        // render(<UserDirectory />, { wrapper: TestWrapper });
        // expect(await screen.findByText(/error/i)).toBeInTheDocument();
    });

    test("search filters users correctly", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<UserDirectory />, { wrapper: TestWrapper });
        // // Wait for users to load
        // await screen.findByText("John Doe");
        // // Type in search
        // await user.type(screen.getByRole("textbox"), "Jane");
        // // Verify filtering
        // expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
        // expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
});
