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
        // TODO
    });

    test("renders users after successful fetch", async () => {
        // TODO
    });

    test("shows error state on fetch failure", async () => {
        // TODO
    });

    test("search filters users correctly", async () => {
        // TODO
    });
});
