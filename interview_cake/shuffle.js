// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >=floor and <=ceiling.

function shuffle(array) {
  for ( var i = 0; i < array.length; i++ ) {
    var rand = getRandom( i, array.length - 1 );
    swap( array, i, rand );
  }
  return array;
}

function swap (array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	return array;
}

function getRandom(floor, ceiling) {
	var spread = ceiling - floor + 1;
	var rand   = Math.random();
	rand       = Math.floor( rand * spread ) + floor;
	return rand; 
}

var arr = [1,2,3,4,5,6,7,8,9]

// This is a semi-famous algorithm known as the Fisher-Yates shuffle (sometimes called the Knuth shuffle).

// Complexity
// O(n)O(n) time and O(1)O(1) space.