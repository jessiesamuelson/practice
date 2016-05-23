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

var Node = function (opts) {
	this.name = opts.name;
  this.value = opts.value;
	this.left  = null;
	this.right = null;
}

Node.prototype = {
	insertLeft: function (opts) {
    this.left = new Node(opts);
    return this.left;
	},
	insertRight: function (opts) {
		this.right = new Node(opts);
		return this.right;
	}
}

function longestStreak (headNode) {
  var stack = new Stack();
  var current = headNode;
  current.streak = 1;
  var output = [current];
  stack.push(current);
  var node;
  var longest_streak = 1;
  while ( stack.items.length ) {
  	node = stack.peek();
    node.visited = true;
    if ( node.left && !node.left.visited ) {
    	stack.push(node.left);
    	node.left.visited = true;
    	output.push(node.left);
      node.left.streak = 1;
      if ( node.value + 1 === node.left.value ) {
        node.left.streak = node.streak + 1;
        if ( node.left.streak > longest_streak ) longest_streak = node.left.streak
      }
    }
    else if ( node.right && !node.right.visited ) {
    	stack.push(node.right);
    	node.right.visited = true;
    	output.push(node.right);
      node.right.streak = 1
      if ( node.value + 1 === node.right.value ) {
        node.right.streak = node.streak + 1;
        if ( node.right.streak > longest_streak ) longest_streak = node.right.streak
      }
    }
    else {
			stack.pop();
    }
  }
  for (var i = 0; i < output.length; i++) {
    console.log("name: " + output[i].name + ", value: " + output[i].value + ", streak: " + output[i].streak )
  }
  return longest_streak;
}


var node_a = new Node({value: 1, name: "a"});
var node_b = node_a.insertLeft({value: 2, name: "b"});
var node_c = node_b.insertLeft({value: 3, name: "c"});
var node_d = node_c.insertLeft({value: 7, name: "d"});
var node_e = node_d.insertLeft({value: 8, name: "e"});
var node_f = node_b.insertRight({value: 4, name: "f"});
var node_g = node_a.insertRight({value: 2, name: "g"});
var node_h = node_g.insertLeft({value: 5, name: "h"});
var node_i = node_g.insertRight({value: 1, name: "i"});
var node_j = node_i.insertRight({value: 2, name: "j"});
var node_k = node_j.insertRight({value: 3, name: "k"});
var node_l = node_k.insertRight({value: 4, name: "l"});



















