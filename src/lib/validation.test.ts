import { describe, expect, test } from "vitest";

import { isEmail } from "./validation";

describe("isEmail", () => {
    test("returns true for valid email", () => {
        expect(isEmail("test@example.com")).toBe(true);
        expect(isEmail("user.name@domain.org")).toBe(true);
        expect(isEmail("user+tag@example.co.uk")).toBe(true);
    });

    test("returns false for invalid email", () => {
        expect(isEmail("")).toBe(false);
        expect(isEmail("notanemail")).toBe(false);
        expect(isEmail("missing@domain")).toBe(false);
        expect(isEmail("@nodomain.com")).toBe(false);
        expect(isEmail("spaces in@email.com")).toBe(false);
    });
});
