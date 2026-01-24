import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
    test("renders with children text", () => {
        render(<Button>Click me</Button>);

        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
    });

    test("calls onClick handler when clicked", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Click me</Button>);

        await user.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled</Button>);

        expect(screen.getByRole("button")).toBeDisabled();
    });

    test("renders with different variants", () => {
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();

        rerender(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("renders with different sizes", () => {
        const { rerender } = render(<Button size="sm">Small</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();

        rerender(<Button size="md">Medium</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
