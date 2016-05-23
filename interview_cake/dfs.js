var Stack = function () {
	this.items = [];
}

Stack.prototype = {
	push: function (item) {
    this.items.push(item);
	},
	pop: function () {
		if ( !this.items.length ) return null;
		return this.items.pop();
	},
	peek: function () {
		if ( !this.items.length ) return null;
		return this.items[ this.items.length - 1 ];
	},
}

var Node = function (value) {
	this.value = value;
	this.left  = null;
	this.right = null;
}

Node.prototype = {
	insertLeft: function (value) {
    this.left = new Node(value);
    return this.left;
	},
	insertRight: function (value) {
		this.right = new Node(value);
		return this.right;
	}
}

function dfs (headNode) {
  var stack = new Stack();
  var current = headNode;
  var output = [current];
  stack.push(current);
  var node;
  while ( stack.items.length ) {
  	node = stack.peek();
    node.visited = true;
    if ( node.left && !node.left.visited ) {
    	stack.push(node.left);
    	node.left.visited = true;
    	output.push(node.left);
    }
    else if ( node.right && !node.right.visited ) {
    	stack.push(node.right);
    	node.right.visited = true;
    	output.push(node.right);
    }
    else {
			stack.pop();
    } 
  }
  return output;
}

function dfsrescursive(headNode) {
  var output = [];
  inner(headNode);
  function inner( node ) {
    if ( node ) output.push( node );
    
    if ( !node ) return output;
    
    if ( node.left ) {
      inner( node.left );
    }
    if ( node.right ) {
      inner( node.right );
    }
  }
  return output;
}

var node1 = new Node(1);
var node2 = node1.insertLeft(2);
var node3 = node2.insertLeft(3);
var node4 = node3.insertLeft(4);
var node5 = node3.insertRight(5);
var node6 = node2.insertRight(6);
var node7 = node6.insertLeft(7);
var node8 = node6.insertRight(8);
var node9 = node1.insertRight(9);
var node10 = node9.insertLeft(10);
var node11 = node10.insertLeft(11);
var node12 = node10.insertRight(12);
var node13 = node9.insertRight(13);
var node14 = node13.insertLeft(14);
var node15 = node13.insertRight(15);