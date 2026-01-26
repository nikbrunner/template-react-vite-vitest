import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { RegistrationForm } from "./RegistrationForm";

describe("RegistrationForm", () => {
    test("renders all form fields", () => {
        // TODO: Implement
        // render(<RegistrationForm onSubmit={vi.fn()} />);
        // expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
        // expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    test("shows email error for invalid format", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<RegistrationForm onSubmit={vi.fn()} />);
        // await user.type(screen.getByRole("textbox", { name: /email/i }), "invalid");
        // await user.tab();
        // expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });

    test("shows confirm password error when doesn't match", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<RegistrationForm onSubmit={vi.fn()} />);
        // await user.type(screen.getByLabelText(/^password$/i), "password123");
        // await user.type(screen.getByLabelText(/confirm password/i), "different");
        // await user.tab();
        // expect(screen.getByText(/passwords.*match/i)).toBeInTheDocument();
    });

    test("submit button is disabled when form is invalid", () => {
        // TODO: Implement
        // render(<RegistrationForm onSubmit={vi.fn()} />);
        // expect(screen.getByRole("button", { name: /register/i })).toBeDisabled();
    });

    test("submit button is enabled when form is valid", async () => {
        // TODO: Implement
        // const user = userEvent.setup();
        // render(<RegistrationForm onSubmit={vi.fn()} />);
        // await user.type(screen.getByRole("textbox", { name: /email/i }), "test@example.com");
        // await user.type(screen.getByLabelText(/^password$/i), "password123");
        // await user.type(screen.getByLabelText(/confirm password/i), "password123");
        // expect(screen.getByRole("button", { name: /register/i })).toBeEnabled();
    });

    test("calls onSubmit with form data when submitted", async () => {
        // TODO: Implement
        // const onSubmit = vi.fn();
        // const user = userEvent.setup();
        // render(<RegistrationForm onSubmit={onSubmit} />);
        // await user.type(screen.getByRole("textbox", { name: /email/i }), "test@example.com");
        // await user.type(screen.getByLabelText(/^password$/i), "password123");
        // await user.type(screen.getByLabelText(/confirm password/i), "password123");
        // await user.click(screen.getByRole("button", { name: /register/i }));
        // expect(onSubmit).toHaveBeenCalledWith({ email: "test@example.com", password: "password123" });
    });
});
