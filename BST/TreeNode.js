// TreeNode class.
// For all manner of tree-like data structures.

// TreeNode constructor.
// Parameters:
//    e - Element to be stored in the node.
//    left - Pointer to the left node.
//    right - Pointer to the right node.
function TreeNode(e, left, right) {
  this.e = e;
  this.height = 0;

  if (left) {
    this.left = left;
  }

  if (right) {
    this.right = right;
  }
};

module.exports = TreeNode;
