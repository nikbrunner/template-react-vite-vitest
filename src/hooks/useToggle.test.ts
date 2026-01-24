import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useToggle } from "./useToggle";

describe("useToggle", () => {
    test("initializes with false by default", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.value).toBe(false);
    });

    test("initializes with provided value", () => {
        const { result } = renderHook(() => useToggle(true));

        expect(result.current.value).toBe(true);
    });

    test("toggles value", () => {
        const { result } = renderHook(() => useToggle());

        act(() => {
            result.current.toggle();
        });

        expect(result.current.value).toBe(true);

        act(() => {
            result.current.toggle();
        });

        expect(result.current.value).toBe(false);
    });

    test("setTrue sets value to true", () => {
        const { result } = renderHook(() => useToggle(false));

        act(() => {
            result.current.setTrue();
        });

        expect(result.current.value).toBe(true);
    });

    test("setFalse sets value to false", () => {
        const { result } = renderHook(() => useToggle(true));

        act(() => {
            result.current.setFalse();
        });

        expect(result.current.value).toBe(false);
    });
});
