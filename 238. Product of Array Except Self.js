/*
238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let result = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        result = result * nums[j];
      }
    }
    arr.push(result);
  }
  return arr;
};

var input = [1, 2, 3, 4];
// var input = [0, 0]
// var input = [1, 0]

productExceptSelf(input);
//Output: [24,12,8,6]
