function Stack () {
  this.items = [];
}

Stack.prototype = {
  push: function(value) {
    this.items.push(value);
  },
  pop: function(){
    if (this.items.length === 0) return null
    return this.items.pop();
  },
  peek: function(){
    if (this.items.length === 0) return null
    return this.items[this.items.length - 1];
  }
}

function maxStack(stack) {
  var tempStack = new Stack()
  if (stack.peek() === null) throw new Error("Can't get max of nada!")
  var max = stack.peek();

  // find max by checking last item, and then moving item to the temp stack
  while ( stack.peek() !== null ) {
    if (stack.peek() > max ) max = stack.peek();
    tempStack.push(stack.pop())
  }
  // return items to the original stack
  while ( tempStack.peek() !== null ) stack.push(tempStack.pop()) 

  return max;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function MaxStack(){
  this.stack = new Stack();
  this.max   = new Stack();
}

MaxStack.prototype = {
  push: function(value) {
    this.stack.push(item);
    if ( !this.max.peek() || item >= this.max.peek() ){
      this.max.push(item);
    }
    return item;
  },
  pop: function() {
    var item = this.stack.pop()
    if ( this.max.peek() === item ) {
      this.max.pop();
    }
    return item;
  },
  getMax: function() {
    if ( !this.max.peek() ) throw new Error("Nothing there yet homie!");
    else return this.max.peek()

  }
}



















var s = new Stack();
s.push(8);
s.push(1);
s.push(4);
s.push(10);
s.push(13);
s.push(9);
s.push(7);
s.push(2);

var empty = new Stack()