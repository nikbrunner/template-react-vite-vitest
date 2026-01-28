import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { App } from "./App";

describe("App", () => {
    test("renders todo list heading", () => {
        render(<App />);
        expect(screen.getByRole("heading", { name: /todo list/i })).toBeInTheDocument();
    });
});
