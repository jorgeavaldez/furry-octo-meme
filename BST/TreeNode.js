// TreeNode class.
// For all manner of tree-like data structures.

// TreeNode constructor.
// Parameters:
//    e - Element to be stored in the node.
//    left - Pointer to the left node.
//    right - Pointer to the right node.
function TreeNode(e, left, right) {
  this.e = e;

  if (left) {
    this.left = left;
  }

  if (right) {
    this.right = right;
  }
};

// height function
//    Returns the maximum of the height of the LST and RST.
TreeNode.prototype.height = function () {
  if (!this.left && !this.right) {
    return 0;
  }

  else {
    return 1 + Math.max(this.left.height(), this.right.height());
  }
};

module.exports = TreeNode;
