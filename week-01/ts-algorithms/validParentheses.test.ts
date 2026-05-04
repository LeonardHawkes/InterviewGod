import { describe, it, expect } from "vitest";
import { isValid } from "./validParentheses";

describe("isValid", () => {
  it("returns true for '()'", () => {
    expect(isValid("()")).toBe(true);
  });

  it("returns true for '()[]{}'", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("returns true for nested '({[]})'", () => {
    expect(isValid("({[]})")).toBe(true);
  });

  it("returns false for '(]'", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("returns false for '([)]'", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("returns false for a single open bracket '{'", () => {
    expect(isValid("{")).toBe(false);
  });

  it("returns true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("returns false for a lone close bracket '}'", () => {
    expect(isValid("}")).toBe(false);
  });
});
