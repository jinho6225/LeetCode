/*
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
 * @param {number}
 * @return {number}
 */

var climbStairs = function (n) {
  let store = {};
  return (function climbing(n) {
    if (n in store) {
      return store[n];
    } else {
      if (n === 1) {
        return n;
      } else if (n === 2) {
        return n;
      } else if (n > 2) {
        store[n] = climbing(n - 1) + climbing(n - 2);
        return store[n];
      }
    }
  })(n);
};

//5/18/2020 solution
var climbStairs = function (n) {
  let arr = [1, 2];
  if (2 >= n) {
    return arr[n - 1];
  } else {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr[arr.length - 1];
};
