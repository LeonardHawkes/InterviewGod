# InterviewGod
A focused practice repo to rebuild from-scratch JavaScript + React interview skills.

## Structure
week-01/
  js-drills/
    myMap.js
  react-microbuilds/
    ColorList.tsx
playgrounds/
  react-vite/ # run React TSX snippets quickly

## Daily Study Log

| Date       | Session  | What I practiced | Time | 1-line insight |
|------------|----------|------------------|------|----------------|
| 2025-09-16 | JS Drill | `myMap`          | 25m  | Learned that `map` builds a new array, skips holes with `i in arr`, and always runs the callback with `(element, index, array)`. Also practiced explaining `map` vs `forEach` and the “forgot return” trap. |

### How to Use
- **Weeks**: Put exercises under `week-0X`.
- **JS drills**: Tiny pure functions, 1 file each, plus a short explanation comment at the top.
- **React micro-builds**: Single-file TSX components; keep state minimal.
- **Playground**: Use `playgrounds/react-vite` to run/preview React components quickly.

## Tonight’s Warm-up (completed)
- ✅ Implemented `myMap(arr, fn)` (skips holes correctly).
- ✅ Reviewed callbacks: `(element, index, array)`.
- ✅ Explained difference between `map` and `forEach`.
- ✅ Covered the “forgot return” trap in `map`.

## Commands

From the repo root:

```bash
# one-time
npm i

# run React playground
cd playgrounds/react-vite
npm i
npm run dev
