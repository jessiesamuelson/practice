// Write a function to find the 2nd largest element in a binary search tree.
// Here's a sample binary tree node class:

function Node ( value ) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

Node.prototype = {
  insertLeft: function ( value ) {
    this.left = new Node( value );
    return this.left;
  },
  insertRight: function ( value ) {
    this.right = new Node( value );
    return this.right;
  }
}

function getLargest ( node ) {
  var current = node;
  while ( current.right ) {
    current = current.right;
  }
  return current.value;
}

var node_5 = new Node(5);
var node_3 = node_5.insertLeft(3);
var node_1 = node_3.insertLeft(1);
var node_4 = node_3.insertRight(4);
var node_8 = node_5.insertRight(8);
var node_7 = node_8.insertLeft(7);
var node_12 = node_8.insertRight(12);
var node_10 = node_12.insertLeft(10);
var node_9 = node_10.insertLeft(9);
var node_11 = node_10.insertRight(11);

function getSecondLargest ( node ) {
  var current = node;
  var secondLargest;
  while ( current.right ) {
    secondLargest = current.value;
    current = current.right;
  }
  var largest = current;
  if ( largest.left !== null ) {
    secondLargest = getLargest(largest.left)
  }
  return secondLargest;
}
function findLargest(rootNode) {
  var current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode.left && !rootNode.right) {
      throw new Error('Tree must have at least 2 nodes');
  }

  var current = rootNode;

  while ( current ) {
    // case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if ( current.left && !current.right ) { return findLargest(current.left); }

    // case: current is parent of largest, and
    // largest has no children, so
    // current is 2nd largest
    if ( current.right && !current.right.left && !current.right.right) { return current.value; }

    current = current.right;
  }
}