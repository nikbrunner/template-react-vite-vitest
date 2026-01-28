import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Modal } from "./Modal";

describe("Modal", () => {
    test("does not render as open when isOpen is false", () => {
        // TODO
    });

    test("renders as open when isOpen is true", () => {
        // TODO
    });

    test("closes on backdrop click", async () => {
        // TODO
    });

    test("does NOT close when clicking modal content", async () => {
        // TODO
    });

    test("has correct accessibility attributes", () => {
        // TODO
    });
});
