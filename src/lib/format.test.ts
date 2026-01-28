import { describe, expect, test } from "vitest";

import { formatPrice } from "./format";

describe("formatPrice", () => {
    test("formats cents to dollars", () => {
        expect(formatPrice(7999)).toBe("$79.99");
        expect(formatPrice(100)).toBe("$1.00");
        expect(formatPrice(50)).toBe("$0.50");
        expect(formatPrice(0)).toBe("$0.00");
    });
});
