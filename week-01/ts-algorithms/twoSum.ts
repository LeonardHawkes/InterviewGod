/**
 * Two Sum
 *
 * Given an array of integers `nums` and an integer `target`, return the indices
 * of the two numbers that add up to `target`. Each input has exactly one solution
 * and you may not use the same element twice.
 *
 * Time:  O(n)
 * Space: O(n)
 */
export function twoSum(nums: number[], target: number): [number, number] {
  const seen = new Map<number, number>(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }

  throw new Error("No solution found");
}
