import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { App } from "./App";

describe("App", () => {
    test("renders heading and initial count", () => {
        render(<App />);

        expect(screen.getByRole("heading", { name: /vite app/i })).toBeInTheDocument();
        expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    });

    test("increments count when clicking increment button", async () => {
        const user = userEvent.setup();
        render(<App />);

        const incrementButton = screen.getByRole("button", { name: /increment/i });
        await user.click(incrementButton);

        expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    });

    test("resets count when clicking reset button", async () => {
        const user = userEvent.setup();
        render(<App />);

        const incrementButton = screen.getByRole("button", { name: /increment/i });
        const resetButton = screen.getByRole("button", { name: /reset/i });

        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(screen.getByText(/count: 2/i)).toBeInTheDocument();

        await user.click(resetButton);
        expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    });
});
