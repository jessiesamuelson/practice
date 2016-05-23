// Hooray! It's opposite day. Linked lists go the opposite way today.
// Write a function for reversing a linked list ↴ . Do it in-place ↴ .

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

// Here's a sample linked list node class:

function LinkedListNode( value ) {
  this.value = value;
  this.next = null;
}


function reverse(headOfList) {
  var current  = headOfList;
  var previous = null;
  var nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {

      // copy a pointer to the next element
      // before we overwrite current.next
      nextNode = current.next;

      // reverse the 'next' pointer
      current.next = previous;

      // step forward in the list
      previous = current;
      current = nextNode;
  }

  return previous;
}




function LinkedListNode(value) {
  this.value = value;
  this.next  = null;
}

function reverse2(headNode) {
  var current  = headNode;
  var previous = null;
  var next     = null;
  while ( current ) {
    next         = current.next
    current.next = previous;
    previous     = current;
    current      = next;
  }
  return previous;
}


var node_1 = new LinkedListNode(1);
var node_2 = new LinkedListNode(2);
var node_3 = new LinkedListNode(3);
var node_4 = new LinkedListNode(4);

node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;




// previous = node_3;
// current = null







// node_1.value = 1
// node_1.next = null;
// node_2.value = 2
// node_2.next = node_1;
// node_3.value = 3
// node_3.next = node_2;







































