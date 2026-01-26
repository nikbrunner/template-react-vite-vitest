import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { TodoList } from "./TodoList";

describe("TodoList", () => {
    test("can add a new todo", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<TodoList />);
        // const input = screen.getByRole("textbox");
        // await user.type(input, "New todo");
        // await user.click(screen.getByRole("button", { name: /add/i }));
        // expect(screen.getByText("New todo")).toBeInTheDocument();
    });

    test("can toggle todo completion", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<TodoList />);
        // // Add a todo first, then toggle it
    });

    test("can delete a todo", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<TodoList />);
        // // Add a todo first, then delete it
    });

    test("filters work correctly", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<TodoList />);
        // // Add todos with different completion states
        // // Click filter buttons and verify visibility
    });

    test("counter shows correct number", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<TodoList />);
        // // Add todos and verify counter text
    });
});
