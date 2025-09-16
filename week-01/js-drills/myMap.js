/**
 * Implement Array.prototype.map behavior.
 * - Must return a NEW array
 * - Skip holes (e.g., [,2,,4] => maps only 2 and 4)
 */
export function myMap(arr, fn) {
  // your implementation here tonight
  const result = [];

  for( let i = 0; i < arr.length; i++) {
    if(!(i in arr)) continue;

    result.push(fn(arr[i], i, arr));

  }
  return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2)); // [2,4,6]
console.log(myMap([, 2, , 4], (x) => x * 2)); // [4,8]
console.log(myMap([], (x) => x * 2)); // []
console.log(myMap(['a', 'b', 'c'], (ch, i) => ch + i)); // ['a0','b1','c2']
console.log(myMap(['a', 'b', 'c'], (ch) => ch.toUpperCase())); // ['A','B','C']
console.log(myMap([, 2, 4], (x) => x  * 10)); // [20,40]
