import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { PasswordStrength } from "./PasswordStrength";

describe("PasswordStrength", () => {
    test("renders input field", () => {
        // TODO
    });

    test("shows Weak for short passwords (< 6 chars)", async () => {
        // TODO
    });

    test("shows Medium for alphanumeric passwords (6+ chars)", async () => {
        // TODO
    });

    test("shows Strong for complex passwords (8+ chars with special)", async () => {
        // TODO
    });

    test("show/hide toggle works correctly", async () => {
        // TODO
    });
});
