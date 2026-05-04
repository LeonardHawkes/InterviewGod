import { describe, it, expect } from "vitest";
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("returns indices for the basic example", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("handles the answer not being at index 0", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("handles duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("works with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("works with a larger array", () => {
    const nums = [1, 5, 3, 7, 9, 2];
    const result = twoSum(nums, 10);
    // Multiple valid pairs sum to 10: (1,9)→[0,4] or (3,7)→[2,3]
    const [i, j] = result;
    expect(nums[i] + nums[j]).toBe(10);
  });
});
