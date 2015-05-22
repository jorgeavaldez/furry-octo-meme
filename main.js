var LinkedList = require('./LinkedList/LinkedList.js');
var BinarySearchTree = require('./BST/BSTree.js');
var AVLTree = require('./AVL/AVLTree.js');

/* TEST CODE FOR LINKED LIST
//***************************/

// var list = new LinkedList();
//
// console.log('List initialization.\n');
//
// for (var i = 0; i < 40; i++) {
//   list.push(i);
//   console.log(i + ' pushed to list.');
// }
//
// console.log('\nTesting pop.\n');
//
// while (!(list.isEmpty())) {
//   console.log('Popped from list: ' + list.unshift());
//   console.log('Items left in list: ' + list.length);
//   console.log();
// }

/* TEST CODE FOR AVL TREE
//*************************/

var avl = new AVLTree();

console.log('Adding to avl tree.\n');

for (var i = 0; i < 10; i++) {
  avl.insert(i);
  console.log('Added ' + i + '.');
}

console.log('Num Elements: ' + avl.numElements);
console.log('Root val: ' + avl.root.e);

console.log('Testing flatten.\n');

var flatTree = avl.flatten();

flatTree.forEach(function(elem) {
  console.log('Item: ' + elem);
});
