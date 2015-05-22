var TreeNode = require('../BST/TreeNode.js');

function AVLTree() {
  this.numElements = 0;
  this.root = undefined;
}

// Add function. Inserts e to the tree.
AVLTree.prototype.insert = function (e) {
  this._insert(this.root, e);
};

AVLTree.prototype._insert = function (root, e) {

  if (!root) {
    root = new TreeNode(e);
    this.numElements += 1;
    return;
  }

  else if (e < root.e) {
    if (!root.left) {
      root.left = new TreeNode(e);
      this.numElements += 1;
    }

    else {
      this._insert(root.left, e);
    }
  }

  else if (e > root.e) {
    if (!root.right) {
      root.right = new TreeNode(e);
      this.numElements += 1;
    }

    else {
      this._insert(root.right, e);
    }
  }

  else {
    return;
  }

  this._balance(root);
};

AVLTree.prototype._balance = function (root) {

  // inb4 this case actually happens
  if (!root) {
    console.log('\nbro you suck cock\n8=======D\n');
    return;
  }

  // Imbalance in LST
  if (root.left.height() - root.right.height() > 1) {
    if (root.left.left.height() >= root.left.right.height()) {
      this._rotateWithLeftChild(root);
    }

    else {
      this._doubleWithLeftChild(root);
    }
  }

  // Imbalance in RST
  else if (root.right.height() - root.left.height() > 1){
    if (root.left.right.height() >= root.left.left.height()) {
      this._rotateWithRightChild(root);
    }

    else {
      this._doubleWithRightChild(root);
    }
  }

  root.height = Math.max(this._nodeHeight(root.left),
    this._nodeHeight(root.right)) + 1;
};

// Case 1 rotation.
AVLTree.prototype._rotateWithLeftChild = function (k2) {
  var k1 = k2.left;
  k2.left = k1.right;
  k1.right = k2;
  k2.height = Math.max(this._nodeHeight(k2.left), this._nodeHeight(k2.right)) + 1;
  k1.height = Math.max(this._nodeHeight(k1.left), k2.height) + 1;
  k2 = k1;
};

// Case 4 rotation.
AVLTree.prototype._rotateWithRightChild = function (k1) {
  var k2 = k1.right;
  k1.right = k2.left;
  k2.left = k1;
  k1.height = Math.max(this._nodeHeight(k1.left), this._nodeHeight(k1.right)) + 1;
  k2.height = Math.max(this._nodeHeight(k2.right), k1.height) + 1;
  k1 = k2;
};

// Case 2 double rotation.
AVLTree.prototype._doubleWithLeftChild = function (k3) {
  this.rotateWithRightChild(k3.left);
  this.rotateWithLeftChild(k3);
};

// Case 3 double rotation.
AVLTree.prototype._doubleWithRighttChild = function (k1) {
  this.rotateWithLeftChild(k1.left);
  this.rotateWithRightChild(k1);
};

// Returns the height of the given node, or -1 if the node is undefined or null.
AVLTree.prototype._nodeHeight = function (root) {
  return root ? root.height : -1;
};

// Returns the elements of the tree in sorted order as an array.
AVLTree.prototype.flatten = function () {
  var result = [];

  this._flattenHelper(this.root, result);

  return result;
};

// Recursive helper function for flatten.
// Accepts the root node and the array to add to.
AVLTree.prototype._flattenHelper = function (root, arr) {
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

module.exports = AVLTree;
