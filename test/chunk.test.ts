import { expect, test } from "bun:test";
import { chunk } from "../src/chunk";

test("splits evenly", () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("keeps the trailing partial chunk", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test("returns a single chunk when the list is shorter than the size", () => {
  expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
});

test("returns no chunks for an empty list", () => {
  expect(chunk([], 3)).toEqual([]);
});

test("rejects a size that is not a positive integer", () => {
  expect(() => chunk([1], 0)).toThrow(RangeError);
  expect(() => chunk([1], 1.5)).toThrow(RangeError);
});
