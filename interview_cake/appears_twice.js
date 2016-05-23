// I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
// Write a function for finding the number that appears twice.

function appearsTwice ( array ) {
	var count = {};
	var output;
	for ( var i = 0; i < array.length; i++ ){
		if ( !count[ array[ i ] ] ) {
			count[ array[ i ] ] = 1;
		}
		else {
			output = array [ i ];
		}
	}
	return output;
}

function appearsTwice ( array ) {
  var n = array.length - 1;
  var sum1 = ( Math.pow( n, 2 ) + n ) / 2;
  var sum2 = 0;
  for ( var i = 0; i < array.length; i++ ) {
  	sum2 += array[i];
  }
  return sum2 - sum1;
}