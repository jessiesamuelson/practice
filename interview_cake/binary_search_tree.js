function Node ( value ) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

Node.prototype.insertLeft = function ( value ) {
  this.left = new Node(value);
  return this.left;
};

Node.prototype.insertRight = function ( value ) {
  this.right = new Node(value);
  return this.right;
};

function binarySearchTreeChecker ( treeRoot ) {

  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  var nodeAndBoundsStack = [];
  nodeAndBoundsStack.push( {node: treeRoot, lowerBound: -Infinity, upperBound: Infinity} );

  // depth-first traversal
  while (nodeAndBoundsStack.length) {
    var nodeAndBounds = nodeAndBoundsStack.pop();
    var node       = nodeAndBounds.node,
        lowerBound = nodeAndBounds.lowerBound,
        upperBound = nodeAndBounds.upperBound;

    // if this node is invalid, we return false right away
    if ( node.value < lowerBound || node.value > upperBound ) { return false; }

    if ( node.left ) {
      // this node must be less than the current node
      nodeAndBoundsStack.push( {node: node.left, lowerBound: lowerBound, upperBound: node.value});

    }
    if ( node.right ) {
      // this node must be greater than the current node
      nodeAndBoundsStack.push( {node: node.right, lowerBound: node.value, upperBound: upperBound} );
    }
  }

  // if none of the nodes were invalid, return true
  // (at this point we have checked all nodes)
  return true;
}

function bstchecker( headNode ) {
  var stack = [];
  stack.push( { node: headNode, lower: -Infinity, upper: Infinity } );

  while ( stack.length ) {
    var item  = stack.pop();
    var node  = item.node,
        lower = item.lower,
        upper = item.upper;

    if ( node.value < lower || node.value > upper ) return false;

    if ( node.left ) {
      stack.push( { node: node.left, lower: lower, upper: node.value } )
    }

    if ( node.right ) {
      stack.push( { node: node.right, lower: node.value, upper: upper } )
    }
  }
}

function binarySearchTreeCheckerRecursive ( treeRoot, lowerBound, upperBound ) {
  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound ||  Infinity;

  if ( !treeRoot ) return true;

  if ( treeRoot.value > upperBound || treeRoot.value < lowerBound ) {
    return false;
  }

  return binarySearchTreeCheckerRecursive( treeRoot.left, lowerBound, treeRoot.value ) &&
         binarySearchTreeCheckerRecursive( treeRoot.right, treeRoot.value, upperBound );

}

var valid_5  = new Node(5);
var valid_3  = valid_5.insertLeft(3);
var valid_1  = valid_3.insertLeft(1);
var valid_4  = valid_3.insertRight(4);
var valid_10 = valid_5.insertRight(10);
var valid_7  = valid_10.insertLeft(7);
var valid_12 = valid_10.insertRight(12);

var invalid_5  = new Node(5);
var invalid_3  = invalid_5.insertLeft(3);
var invalid_1  = invalid_3.insertLeft(1);
var invalid_4  = invalid_3.insertRight(4);
var invalid_10 = invalid_5.insertRight(10);
var invalid_11 = invalid_10.insertLeft(11);
var invalid_12 = invalid_10.insertRight(12);





