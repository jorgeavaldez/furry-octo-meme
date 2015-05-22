var TreeNode = require('./TreeNode.js');

// Binary Search Tree Class.
//    Lets you store cool stuff. If your stuff isn't cool, then you can't
//    store it :P.

function BSTree() {
  this.numElements = 0;
}

// Adds an item into the BST.
BSTree.prototype.add = function (e) {
  if (!this.root) {
    this.root = new TreeNode(e);
    this.numElements += 1;
  }

  else {
    this._addHelper(this.root, e);
  }
};

// Recursive helper for add.
// Accepts the root and element to add.
BSTree.prototype._addHelper = function (root, e) {
  if (!root) {
    return;
  }

  if (root.left && e < root.e) {
    this._addHelper(root.left, e);
  }

  else if (root.right && e > root.e) {
    this._addHelper(root.right, e);
  }

  else if (!root.left && e < root.e) {
    root.left = new TreeNode(e);
    this.numElements += 1;
  }

  else if (!root.right && e > root.e) {
    root.right = new TreeNode(e);
    this.numElements += 1;
  }

  else {
    return;
  }
};

// Returns true if e is in the BST, false otherwise.
BSTree.prototype.contains = function (e) {
  return this._containsHelper(e, this.root);
};

// Recursive helper function for contains.
// You give it the element to search for and the root.
BSTree.prototype._containsHelper = function (e, root) {
  if (!root) {
    return false;
  }

  else if (root.e === e) {
    return true;
  }

  else {
    if (e < root.e) {
      return containsHelper(e, root.left);
    }

    return containsHelper(e, root.right);
  }
};

// Returns the elements of the tree in sorted order as an array.
BSTree.prototype.flatten = function () {
  var result = [];

  this._flattenHelper(this.root, result);

  return result;
};

// Recursive helper function for flatten.
// Accepts the root node and the array to add to.
BSTree.prototype._flattenHelper = function (root, arr) {
  if (!root) {
    return;
  }

  if (root.left) {
    this._flattenHelper(root.left, arr);
  }

  arr.push(root.e);

  if (root.right) {
    this._flattenHelper(root.right, arr);
  }
};

module.exports = BSTree;
