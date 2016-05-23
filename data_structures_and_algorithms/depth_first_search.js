var Tree = function (headNode) {
	this.root = headNode;
}

Tree.prototype = {
	depthFirstSearch: function() {
		var current = this.root;
		var stack = [current];
		var result = [];
		var re_add = 1;
		while ( stack.length >= 1 ) {
	    if ( stack[stack.length-1] !== current && !current.visited ) stack.push(current);
	    if ( result[result.length-1] !== current && !current.visited ) result.push(current);
	    current.visited = true;
	    if ( current.left !== null && !current.left.visited ) {
	    	current = current.left;
	    }
	    else if ( current.right !== null && !current.right.visited ) {
	    	current = current.right;
	    }
	    else {
	    	current = stack.pop();
	    	if ( re_add && stack.length === 0 ) {
	    		stack.push(this.root)
	    		re_add = 0
	    	}
	    } 
		}
		return result;
	},
}

var Node = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	return this;
}

Node.prototype = {
	insertLeft: function(newNode) {
		if (this.left === null){
			this.left = newNode;
		}
		else {
			this.left.insertLeft(newNode);
		}
		return newNode;
	},
	insertRight: function(newNode) {
		if (this.right === null){
			this.right = newNode;
		}
		else {
			this.right.insertLeft(newNode);
		}
		return newNode;
	},
}

var node1 = new Node(1);
var node2 = node1.insertLeft( new Node(2) );
var node3 = node2.insertLeft( new Node(3) );
var node4 = node3.insertLeft( new Node(4) );
var node5 = node3.insertRight( new Node(5) );
var node6 = node2.insertRight( new Node(6) );
var node7 = node6.insertLeft( new Node(7) );
var node8 = node6.insertRight( new Node(8) );
var node9 = node1.insertRight( new Node(9) );
var node10 = node9.insertLeft( new Node(10) );
var node11 = node10.insertLeft( new Node(11) );
var node12 = node10.insertRight( new Node(12) );
var node13 = node9.insertRight( new Node(13) );
var node14 = node13.insertLeft( new Node(14) );
var node15 = node13.insertRight( new Node(15) );

var tree = new Tree( node1 );


var node_1 = new Node(1);
var node_2 = node_1.insertLeft( new Node(2) );
var node_3 = node_1.insertRight( new Node(3) );
var node_4 = node_2.insertLeft( new Node(4) );
var node_5 = node_2.insertRight( new Node(5) );
var node_6 = node_3.insertLeft( new Node(6) );
var node_7 = node_4.insertLeft( new Node(7) );
var node_8 = node_4.insertRight( new Node(8) );
var node_9 = node_5.insertRight( new Node(9) );
var node_10 = node_6.insertLeft( new Node(10) );
var node_11 = node_6.insertRight( new Node(11) );

var tree2 = new Tree( node_1 );











