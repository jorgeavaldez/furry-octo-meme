var ListNode = require('./ListNode.js');

// LinkedList constructor.
// Parameters:
//    head - A pointer to the head ListNode in the list.
//           If not passed, then this.head defaults to undefined.
function LinkedList(head) {
  if (head) {
    this.head = head;
    this.tail = this.head;
  }

  this.length = 0;
}

// Inserts in the front.
LinkedList.prototype.shift = function (e) {
  if (this.length === 0) {
    this.head = new ListNode(e);
    this.length += 1;
    this.tail = this.head;
  }

  else {
    var temp = this.head;
    this.head = new ListNode(e);
    this.head.next = temp;
    this.length += 1;
  }
};

// Removes from front.
LinkedList.prototype.unshift = function () {
  if (this.length === 0) {
    return undefined;
  }

  else if (this.length === 1) {
    this.length -= 1;
    return this.head.e;
  }

  else {
    var temp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return temp.e;
  }
};

// Adds at the end.
LinkedList.prototype.push = function (e) {
  if (this.length === 0) {
    this.length += 1;
    this.head = new ListNode(e);
    this.tail = this.head;
  }

  else {
    var temp = new ListNode(e);
    this.length += 1;
    this.tail.next = temp;
    this.tail = temp;
  }
};

// Removes from the end.
LinkedList.prototype.pop = function () {
  if (this.length === 0) {
    return undefined;
  }

  else if (this.length === 1) {
    this.length -= 1;
    return this.head.e;
  }

  else {
    var temp = this.tail;
    this.length -= 1;

    this.tail = this.head;
    for (var i = 0; i < this.length - 1; i++) {
      this.tail = this.tail.next;
    }

    return temp.e;
  }
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

module.exports = LinkedList;
