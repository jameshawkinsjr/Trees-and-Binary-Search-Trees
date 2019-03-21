/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 */

// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sortedArrayToBST(nums) {
        if (nums.length === 0) return null;

    let midIdx = Math.floor(nums.length / 2);
    let left = nums.slice(0,midIdx);
    let right = nums.slice(midIdx+1);
    let newNode = new TreeNode(nums[midIdx]);
    newNode.left = sortedArrayToBST(left);
    newNode.right = sortedArrayToBST(right);

    return newNode;
}

let nums = [-10,-3,0,5,9]
// let nums = []

console.log(sortedArrayToBST(nums))