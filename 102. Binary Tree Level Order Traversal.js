/*
102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let list = [];
  let queue = [];
  let cur = root;
  let count = 0;
  let total = 1;
  queue.push(cur);
  while (queue.length > 0) {
    count = total;
    total = 0;
    let result = [];
    while (count > 0) {
      cur = queue.shift();
      if (cur.left) {
        queue.push(cur.left);
        total++;
      }
      if (cur.right) {
        queue.push(cur.right);
        total++;
      }
      result.push(cur.val);
      count--;
    }
    list.push(result);
  }
  return list;
};
