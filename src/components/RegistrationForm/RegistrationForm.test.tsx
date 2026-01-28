import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { RegistrationForm } from "./RegistrationForm";

describe("RegistrationForm", () => {
    test("renders all form fields", () => {
        // TODO
    });

    test("shows email error for invalid format", async () => {
        // TODO
    });

    test("shows confirm password error when doesn't match", async () => {
        // TODO
    });

    test("submit button is disabled when form is invalid", () => {
        // TODO
    });

    test("submit button is enabled when form is valid", async () => {
        // TODO
    });

    test("calls onSubmit with form data when submitted", async () => {
        // TODO
    });
});
