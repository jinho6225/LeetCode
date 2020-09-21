/*
78. Subsets
Medium

Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    debugger;
    let subsetsArray = [[]]; 
    for(const num of nums){ 
        for(let array of [...subsetsArray]) 
            subsetsArray.push(array.concat(num)); 
    }
    return subsetsArray;
};




