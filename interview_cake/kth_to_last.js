// You have a linked list ↴ and want to find the kkth to last node.
// Write a function kthToLastNode() that takes an integer kk and the
// headNode of a singly linked list, and returns the kkth to last node in the list.

// For example:

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

var node_1 = new LinkedListNode(1)
var node_2 = new LinkedListNode(2)
var node_3 = new LinkedListNode(3)
var node_4 = new LinkedListNode(4)

node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;


function kthToLast(headNode, k) {
  var current = headNode;
  var nodes = [current];

  while (current.next) {
    nodes.push(current.next);
    current = current.next;
  }
  return nodes[ nodes.length - k ]
}

function kthToLast2(headNode, k) {
  if (!headNode) throw new Error ("cannot have an empty list");
  var current = headNode;
  var length = 1;
  while (current.next) {
    length += 1;
    current = current.next;
  }

  var target = length - k;
  var index = 0;
  var output = headNode;

  if ( k < length ) throw new Error("k must be smaller than the length of the list");
  while (index < target) {
    output = output.next;
    index += 1;
  }
  return output;
}

// Second approach: maintain a k-wide "block" in one walk down the list.

// Walk one pointer kk nodes from the head. Call it rightNode.
// Put another pointer at the head. Call it leftNode.
// Walk both pointers, at the same speed, towards the tail. This keeps a distance of kk between them.
// When rightNode hits the tail, leftNode is on the target (since it's kk nodes from the end of the list).
function kthToLast3(k, head) {

  var leftNode  = head;
  var rightNode = head;

  // move rightNode to the kth node
  for (var x = 0; x < k - 1; x++) {

    // but along the way, if a rightNode doesn't have a next,
    // then k is greater than the length of the list and there
    // can't be a kth-to-last node! we'll raise an error
    if (!rightNode.next) {
        throw new Error('k is larger than the length of the linked list!');
    }

    rightNode = rightNode.next;
  }

  // starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode  = leftNode.next;
    rightNode = rightNode.next;
  }

  // since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode;
}