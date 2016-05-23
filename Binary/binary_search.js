function outer ( arr, val ) {
  var index = 0;
  var done = false;
  var output;
  binarySearch( arr, val )
  function binarySearch( arr, val ) {
    if ( arr.length === 0 ) {
      done = true;
      output = -1;
    }
    else if ( arr.length === 1 ) {
      done = true;
      if ( arr[0] === val ) { output = index; }
      else                  { output = -1;    }
    }

    while ( !done ) {
      var mid = Math.floor( arr.length / 2 );
      if ( arr[mid] === val ) {
        done = true;
        output = index + mid;
      }
      else if ( arr[mid] > val ) {
        binarySearch( arr.slice( 0, mid ), val );
      }
      else if( arr[mid] < val ){
        index += mid + 1;
        binarySearch( arr.slice( mid + 1, arr.length ), val )
      }
    }
    return output;
  }
  return output;
}

var arr = [1,2,3,5,7,9,13,17,18,22,23,25,26,29,30];
var arr2 = [-7, -4, -2, 0, 1, 3, 5, 9];
var arr3 = [];
var arr4 = [1];