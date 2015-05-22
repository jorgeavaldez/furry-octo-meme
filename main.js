var LinkedList = require('./LinkedList/LinkedList.js');
var BinarySearchTree = require('./BST/BSTree.js');

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

/* TEST CODE FOR BINARY SEARCH TREE
//**********************************/

// var bst = new BinarySearchTree();
//
// console.log('Adding to bst.\n');
//
// for (var i = 0; i < 10; i++) {
//   bst.add(i);
//   console.log('Added ' + i + '.');
// }
//
// console.log('Num Elements: ' + bst.numElements);
//
// console.log('Testing flatten.\n');
//
// var flatTree = bst.flatten();
//
// flatTree.forEach(function(elem) {
//   console.log('Item: ' + elem);
// });
