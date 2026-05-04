/**
 * Valid Parentheses
 *
 * Given a string containing only '(', ')', '{', '}', '[', ']', determine if
 * the input string is valid. A string is valid when:
 *   - Open brackets must be closed by the same type of bracket.
 *   - Open brackets must be closed in the correct order.
 *   - Every close bracket has a corresponding open bracket.
 *
 * Time:  O(n)
 * Space: O(n)
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const match: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== match[char]) return false;
    }
  }

  return stack.length === 0;
}
