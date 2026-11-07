import { expect, test } from "bun:test";
import { windows } from "../src/windows";

test("returns no windows when the list is shorter than the size", () => {
  expect(windows([1, 2], 3)).toEqual([]);
});

test("rejects a size that is not a positive integer", () => {
  expect(() => windows([1], 0)).toThrow(RangeError);
});

test("includes the final window when it ends at the last item", () => {
  expect(windows([1, 2, 3], 2)).toEqual([
    [1, 2],
    [2, 3],
  ]);
  expect(windows([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
});
