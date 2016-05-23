// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0. So:

function fibonacci (n) {
  var fib;
  var secondToLast = 1;
  var last = 1;
	if ( n === 0 ) fib = 0;
	else if ( n < 3 ) fib = 1;
	else {
    for ( var i = 3; i <= n; i++ ) {
    	fib = secondToLast + last;
    	secondToLast = last;
    	last = fib;
    }
	}
	return fib;
}