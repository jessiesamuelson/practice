function merge ( left, right ) {
  var result = [];
  var i = 0;
  var j = 0;

  while ( i < left.length && j < right.length ) {
    if ( left[i] < right[j] ) {
      result.push( left[i] );
      i++;
    }
    else {
      result.push( right[j] );
      j++
    }
  }
  result = result.concat(left.slice(i)).concat(right.slice(j))
  return result;
}

function mergeSort ( arr ) {
  // base cases
  if ( arr.length < 2 ) {
    return arr;
  }

  var mid = Math.floor( arr.length / 2 );
  var left = arr.slice( 0, mid );
  var right = arr.slice( mid );
  var result = merge( mergeSort( left ), mergeSort( right ) );
  return result;
}

function testSort () {
  var arr1 = [ 7, 2, 1, 15, 36, 19 ];
  var result1 = [ 1, 2, 7, 15, 19, 26 ];
  if ( mergeSort( arr1 ) === result1 ) {
    console.log("test1 past");
  }
  else {
    console.log("test1 failed");
  }
}