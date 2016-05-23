function BinaryTreeNode ( value ) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function ( value ) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function ( value ) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function isBalanced ( treeRoot ) {
  var depths = []; // we short-circuit as soon as we find more than 2

  // nodes will store pairs of a node and the node's depth
  var nodes = [];
  nodes.push( [treeRoot, 0] );

  while ( nodes.length ) {

    // pop a node and its depth from the top of our stack
    var nodePair = nodes.pop();
    var node  = nodePair[0],
        depth = nodePair[1];

    // case: we found a leaf
    if ( !node.left && !node.right ) {

      // we only care if it's a new depth
      if ( depths.indexOf( depth ) < 0 ) {
        depths.push( depth );

        // two ways we might now have an unbalanced tree:
        //   1) more than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if ( ( depths.length > 2 ) || ( depths.length === 2 && Math.abs( depths[0] - depths[1] ) > 1 ) ) {
          return false;
        }
      }

    }
    // case: this isn't a leaf - keep stepping down
    else {
      if ( node.left  ) { nodes.push( [node.left,  depth + 1] ); }
      if ( node.right ) { nodes.push( [node.right, depth + 1] ); }
    }
  }

  return true;
}

var balanced_node_1 = new BinaryTreeNode(1);
var balanced_node_2 = balanced_node_1.insertLeft(2);
var balanced_node_3 = balanced_node_2.insertLeft(3);
var balanced_node_4 = balanced_node_1.insertRight(4);

var unbalanced_node_1 = new BinaryTreeNode(1);
var unbalanced_node_2 = unbalanced_node_1.insertLeft(2);
var unbalanced_node_3 = unbalanced_node_2.insertLeft(3);
var unbalanced_node_4 = unbalanced_node_3.insertLeft(4);
var unbalanced_node_5 = unbalanced_node_1.insertRight(5);
