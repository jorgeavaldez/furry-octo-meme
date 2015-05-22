// Standard ListNode class for a LinkedList.
// Parameters:
//    e - The element to store.
//    next - the next ListNode in the list.

function ListNode(e, next) {
  this.e = e;

  if (next) {
    this.next = next;
  }
}

module.exports = ListNode;
