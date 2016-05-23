// Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
// Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

function Q2stacks () {
  this.input  = [];
  this.output = [];
}

Q2stacks.prototype = {
  push: function ( value ) {
    this.input.push( value );
  },
  shift: function () {
    if ( this.output.length === 0 && this.input.length > 0 ) {
      while ( this.input.length > 0 ) {
        this.output.push( this.input.pop() );
      }
    }
    return this.output.pop();
  }
}

var q = new Q2stacks();
q.push(4);
q.push(3);
q.push(2);
q.push(1);

// # ACCOUNTING METHOD
// The accounting method can be used for computing time complexity for things like 
// "the cost of mm operations on this data structure."
// In the accounting method, you simply look at the time cost incurred by each item
// passing through the system instead of the time cost of each operation.

// Complexity
// Each enqueue is clearly O(1)O(1) time, and so is each dequeue when outStack has items.
// Dequeue on an empty outStack is order of the number of items in inStack at that moment,
// which can vary significantly.

// Notice that the more expensive a dequeue on an empty outStack is (that is, the more items
// we have to move from inStack to outStack), the more O(1)O(1)-time dequeues off of a
// non-empty outStack it wins us in the future. Once items are moved from inStack to outStack
// they just sit there, ready to be dequeued in O(1) time. An item never moves "backwards"
// in our data structure.

// We might guess that this "averages out" so that in a set of mm enqueues and dequeues the
// total cost of all dequeues is actually just O(m)O(m). To check this rigorously, we can
// use the accounting method ↴ , counting the time cost per item instead of per enqueue or dequeue.

// So let's look at the worst case for a single item, which is the case where it is enqueued
// and then later dequeued. In this case, the item enters inStack (costing 1 push), then later
// moves to outStack (costing 1 pop and 1 push), then later comes off outStack to get returned
// (costing 1 pop).

// Each of these 4 pushes and pops is O(1)O(1) time. So our total cost per item is O(1)O(1).
// Our mm enqueue and dequeue operations put mm or fewer items into the system, giving a
// total runtime of O(m)O(m)!