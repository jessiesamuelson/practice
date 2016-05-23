function Node ( value ) {
  this.value = value;
  this.parent = null
  this.left = null;
  this.right = null;
  return this;
}

Node.prototype = {
  setParent: function ( parent ) {
  	this.parent = parent;
  },
  returnParent: function () {
    return this.parent;
  },
  addLeft: function ( value ) {
  	this.left = new Node( value );
  	this.left.parent = this;
  	return this.left;
  },
  getLeft: function () {
  	return this.left;
  },
  addRight: function ( value ) {
    this.right = new Node ( value);
    this.right.parent = this;
    return this.right;
  },
  getRight: function () {
  	return this.right;
  },
}

var root = new Node(1);
var node2 = root.addLeft(2);
var node3 = root.addRight(3);
var node4 = node2.addLeft(3)
var node5 = node2.addRight(7);

var tree = [root, node2, node3, node4, node5]
function checkSequence() {
	var stack = [root];
  root.visited = true;
  root.currentStreak = 1;
  var longestSoFar = 1;
  var current = root
	// Go until there are no pointers 
	while ( !stack.isEmpty() ) {
    var top = stack.pop()
    
    // check left
    checkLeft( top );
    
    // check right
    checkRight( top );

    // start over & when you hit a leaf, return to stack to get the next pointer
	}
  function checkLeft( currentNode ) {
		if ( currentNode.left !== null ) {
      stack.push( currentNode.left );
      currentNode.left.visited = true;
			if ( currentNode.value + 1 === currentNode.left.value ) {
				currentNode.currentStreak += 1;
				if ( currentNode.currentStreak > longestSoFar ) {
					longestSoFar = currentNode.currentStreak;
				}
			}
		},
	}


}


