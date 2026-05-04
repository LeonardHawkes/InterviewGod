# InterviewGod — 8-Week Full-Stack Skills Plan

A structured curriculum to go from solid fundamentals to full-stack interview-ready in 8 weeks.  
Each week lives in its own folder (`week-NN/`) with sub-folders per topic area.

---

## Week 1 — Foundations ✅
**Goal:** Establish the toolchain and nail the most common array/string patterns.

| Topic | Files |
|-------|-------|
| JS Drills (custom `map`) | `week-01/js-drills/myMap.js` |
| Two Sum (hash-map O(n)) | `week-01/ts-algorithms/twoSum.ts` + `.test.ts` |
| Valid Parentheses (stack) | `week-01/ts-algorithms/validParentheses.ts` + `.test.ts` |
| React Micro-build: ColorList | `week-01/react-microbuilds/ColorList.tsx` |

Run tests:
```bash
npx vitest run week-01/ts-algorithms
```

---

## Week 2 — Sliding Window & Two Pointers
**Goal:** Solve contiguous-subarray / in-place array problems efficiently.

Planned problems:
- Longest Substring Without Repeating Characters
- Container With Most Water
- 3Sum

---

## Week 3 — Binary Search & Sorting
**Goal:** Apply binary search beyond trivial sorted-array lookup.

Planned problems:
- Search in Rotated Sorted Array
- Find Minimum in Rotated Sorted Array
- Merge Intervals

---

## Week 4 — Linked Lists & Fast/Slow Pointers
**Goal:** Manipulate pointer-based structures confidently.

Planned problems:
- Reverse a Linked List
- Detect Cycle (Floyd's)
- Merge Two Sorted Lists

---

## Week 5 — Trees & Recursion
**Goal:** Comfortable DFS/BFS on binary trees.

Planned problems:
- Maximum Depth of Binary Tree
- Binary Tree Level Order Traversal
- Lowest Common Ancestor

---

## Week 6 — Graphs & BFS/DFS
**Goal:** Solve grid and adjacency-list graph problems.

Planned problems:
- Number of Islands
- Clone Graph
- Course Schedule (topological sort)

---

## Week 7 — Dynamic Programming
**Goal:** Recognize DP patterns and implement bottom-up solutions.

Planned problems:
- Climbing Stairs
- Coin Change
- Longest Common Subsequence

---

## Week 8 — System Design + Full-Stack Integration
**Goal:** Tie algorithmic thinking to full-stack product sense.

Topics:
- React performance patterns (memo, useCallback, virtualization)
- REST vs GraphQL API design
- System design primer: URL shortener, rate limiter
- Mock interview run-throughs

---

## Toolchain
| Tool | Purpose |
|------|---------|
| TypeScript | Type-safe algorithm implementations |
| Vitest | Fast unit tests (no config needed) |
| React + Vite | UI micro-builds playground |
| ESLint + Prettier | Code quality |

Run all tests: `npm test`  
Type-check: `npm run typecheck`
