import { describe, expect, test, beforeAll } from "bun:test";
//bun test runs all .test files

beforeAll(() => {
  console.log("beforeAll - setup for testing");
});

describe("Math", () => {
  test("addition", () => {
    expect(1 + 1).toBe(2);
  });
});
