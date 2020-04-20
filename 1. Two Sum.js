/*
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Runtime: 52 ms, faster than 92.37% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  let newObj = {};
  for (let i = 0; i < nums.length; i++) {
    const gotNum = nums[i];
    const targetNum = target - gotNum;
    if (!newObj.hasOwnProperty(targetNum)) {
      newObj[gotNum] = i;
    } else {
      return [newObj[targetNum], i];
    }
  }
};

//Runtime: 112 ms, faster than 34.39% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//Runtime: 120 ms, faster than 27.40% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (nums.includes(diff, i + 1)) {
      let idx = nums.indexOf(diff, i + 1);
      return [i, idx];
    }
  }
};

var nums = [11, 15, 2, 7];
// var nums = [3,2,4]
// var nums = [3,3]
var target = 9;
twoSum(nums, target);