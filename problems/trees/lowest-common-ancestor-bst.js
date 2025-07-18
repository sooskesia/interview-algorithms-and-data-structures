// Problem: Lowest Common Ancestor in BST
// Given a binary search tree, find the lowest common ancestor (LCA) of two given nodes.

// Input: root = [6,2,8,0,4,7,9], p = 2, q = 8
// Output: 6

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// Simple tree
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
console.log(lowestCommonAncestor(root, { val: 2 }, { val: 8 }).val); // 6
