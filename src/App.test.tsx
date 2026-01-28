import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { App } from "./App";

describe("App", () => {
    test("renders heading and open modal button", () => {
        render(<App />);
        expect(screen.getByRole("heading", { name: /dialog modal/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /open modal/i })).toBeInTheDocument();
    });
});
