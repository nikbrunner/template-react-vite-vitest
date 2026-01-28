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
        // TODO
    });

    test("renders data in table format", async () => {
        // TODO
    });

    test("sorts by column on header click", async () => {
        // TODO
    });

    test("reverses sort on second click", async () => {
        // TODO
    });

    test("pagination controls work correctly", async () => {
        // TODO
    });

    test("shows correct page info", async () => {
        // TODO
    });
});
