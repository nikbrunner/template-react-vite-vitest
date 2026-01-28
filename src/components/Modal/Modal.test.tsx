import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Modal } from "./Modal";

describe("Modal", () => {
    test("does not render as open when isOpen is false", () => {
        // TODO: Implement
        // render(<Modal isOpen={false} onClose={vi.fn()} title="Test">Content</Modal>);
        // const dialog = screen.getByRole("dialog", { hidden: true });
        // expect(dialog).not.toHaveAttribute("open");
    });

    test("renders as open when isOpen is true", () => {
        // TODO: Implement
        // render(<Modal isOpen={true} onClose={vi.fn()} title="Test">Content</Modal>);
        // const dialog = screen.getByRole("dialog");
        // expect(dialog).toHaveAttribute("open");
    });

    test("closes on backdrop click", async () => {
        // TODO: Implement
        // const onClose = vi.fn();
        // const user = userEvent.setup();
        // render(<Modal isOpen={true} onClose={onClose} title="Test">Content</Modal>);
        // Click on the dialog element itself (backdrop area)
        // await user.click(screen.getByRole("dialog"));
        // expect(onClose).toHaveBeenCalled();
    });

    test("does NOT close when clicking modal content", async () => {
        // TODO: Implement
        // const onClose = vi.fn();
        // const user = userEvent.setup();
        // render(<Modal isOpen={true} onClose={onClose} title="Test">Content</Modal>);
        // await user.click(screen.getByText("Content"));
        // expect(onClose).not.toHaveBeenCalled();
    });

    test("has correct accessibility attributes", () => {
        // TODO: Implement
        // render(<Modal isOpen={true} onClose={vi.fn()} title="Test Modal">Content</Modal>);
        // const dialog = screen.getByRole("dialog");
        // expect(dialog).toHaveAttribute("aria-labelledby", "modal-title");
    });
});
