function generateWordRecursive(arr) {
  var output = [];
  if ( arr.length === 0 ) {
    output = [];
  }
  else if ( arr.length === 1 ) {
    output = arr[0].split("");
  }
  else {
    output        = generateWordRecursive( arr.slice(0, arr.length -1) );
    var length    = output.length;
    var last_word = arr[arr.length -1];

    for ( var i = 0; i < length; i++ ) {
      for ( var j = 0; j < last_word.length; j++ ) {
        var temp  = output[i];
        var entry = temp + last_word[j];
        if ( j === last_word.length - 1 ) {
          output[i] = entry;
        }
        else {
          output.push(entry);
        }
      }
    }
  }

  return output;
}

function generateWordIterative (arr) {
  var output       = [];
  var final_output = [];
  if ( arr.length === 0 ) {
    final_output = [];
  }
  else if ( arr.length === 1 ) {
    final_output = arr[0].split("");
  }
  else {
    output = arr[0].split("");
    for ( var i = 1; i < arr.length; i++) {

      var length = output.length;
      var word   = arr[i];

      for ( var j = 0; j < length; j++ ) {

        for ( var k = 0; k < word.length; k++ ) {
          var temp = output[j];
          var entry = temp + word[k];
          if ( k === word.length - 1 ) {
            output[j] = entry;
          }
          else {
            output.push(entry);
          }
        }
      }
    }
  }
  return output;
}

var arr  = ["cat"];
var arr2 = ["cat", "dog", "ice"];