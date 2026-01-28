import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { App } from "./App";

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false }
        }
    });

describe("App", () => {
    test("renders user directory heading", () => {
        render(
            <QueryClientProvider client={createTestQueryClient()}>
                <App />
            </QueryClientProvider>
        );
        expect(screen.getByRole("heading", { name: /user directory/i })).toBeInTheDocument();
    });
});
