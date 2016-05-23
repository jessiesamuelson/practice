var Queue = function () {
	this.items = [];
}

Queue.prototype = {
	push: function (item) {
		this.items.push(item);
	},
	shift: function () {
		if ( !this.items.length ) return null;
		return this.items.shift();
	},
	peek: function () {
		if ( !this.items.length ) return null;
		return this.items[0];
	},
	// length: function () {
	// 	return this.items.length;
	// }
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

function bfs (headNode) {
  var queue   = new Queue();
  var current = headNode;
  var output  = [current];
  queue.push(current);
  var node;
  while ( queue.items.length ) {
  	node = queue.shift();
    node.visited = true;
    if ( node.left ) { 
    	queue.push(node.left)
    	node.left.visited = true;
    	output.push(node.left);
    };
    if ( node.right ) {
    	queue.push(node.right)
    	node.right.visited = true;
    	output.push(node.right);
    }
  }
  return output;
}


var node_1 = new Node(1);
var node_2 = node_1.insertLeft(2);
var node_3 = node_1.insertRight(3);
var node_4 = node_2.insertLeft(4);
var node_5 = node_2.insertRight(5);
var node_6 = node_3.insertLeft(6);
var node_7 = node_3.insertRight(7);
var node_8 = node_4.insertLeft(8);
var node_9 = node_4.insertRight(9);
var node_12 = node_6.insertLeft(12);

































