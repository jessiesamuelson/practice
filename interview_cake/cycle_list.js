// You have a singly-linked list ↴ and want to check if it contains a cycle.
// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.data—the data held in the node. For example, if our linked list stores
// people in line at the movies, node.data might be the person's name.
// For example:

function Node(value) {
  this.value = value;
  this.next = null;
}

// A cycle occurs when a node’s next points back to a previous node in the list.
// The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

// Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean
// indicating whether the list contains a cycle.

var node_1 = new Node(1);
var node_2 = new Node(2);
var node_3 = new Node(3);

node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_1;

var node_4 = new Node(4);
var node_5 = new Node(5);
var node_6 = new Node(6);

node_4.next = node_5;
node_5.next = node_6;



function containsCycle (node) {
  var current = node;
  var result = false;
  while ( current.next && current.next.visited !== true ) {
    if ( current.visited ) {
      result = true
    }
    else {
      current.visited = true;
      current = current.next;
    }
  }
  return result;
}

function checkCycle(firstNode) {

  // start both runners at the beginning
  var slowRunner = firstNode;
  var fastRunner = firstNode;

  // until we hit the end of the list
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    // case: fastRunner is about to "lap" slowRunner
    if (fastRunner === slowRunner) {
      return true;
    }
  }

  // case: fastRunner hit the end of the list
  return false;
}