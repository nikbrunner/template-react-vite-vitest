import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Modal } from "./Modal";

describe("Modal", () => {
    test("does not render when closed", () => {
        // TODO: Implement
        // render(<Modal isOpen={false} onClose={vi.fn()} title="Test">Content</Modal>);
        // expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    test("renders when open", () => {
        // TODO: Implement
        // render(<Modal isOpen={true} onClose={vi.fn()} title="Test">Content</Modal>);
        // expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    test("closes on Escape key press", async () => {
        // TODO: Implement
        // const onClose = vi.fn();
        // const user = userEvent.setup();
        // render(<Modal isOpen={true} onClose={onClose} title="Test">Content</Modal>);
        // await user.keyboard("{Escape}");
        // expect(onClose).toHaveBeenCalled();
    });

    test("closes on overlay click", async () => {
        // TODO: Implement
        // const onClose = vi.fn();
        // const user = userEvent.setup();
        // render(<Modal isOpen={true} onClose={onClose} title="Test">Content</Modal>);
        // Click on overlay (parent of modal)
        // await user.click(screen.getByRole("dialog").parentElement!);
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
        // expect(dialog).toHaveAttribute("aria-modal", "true");
        // expect(dialog).toHaveAttribute("aria-labelledby", "modal-title");
    });
});
