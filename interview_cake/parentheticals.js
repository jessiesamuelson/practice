// I like parentheticals (a lot).
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening
// parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis),
// the output should be 79 (position of the last parenthesis).

var sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
var firstPosition = 10;

function checkParens(sentence, firstPostion) {
  var stack = [ { index: firstPostion, character: sentence[firstPostion] } ]

  var output = null;
  index = firstPostion + 1;
  while ( stack.length && index < sentence.length ) {
    if ( sentence[index] === "(" ) {
      stack.push( { index: index, character: "(" } )
    }
    else if ( sentence[index] === ")" && stack.length > 1 ) {
      stack.pop()
    }
    else if ( sentence[index] === ")" && stack.length === 1 ) {
      output = index;
      stack.pop();
    }
    index++;
  }
  if ( output === null ) {
    throw new Error("no closing parens")
  }
  else {
    return output;
  }

}

function checkParens2(sentence, firstPostion) {
  var openParens = 1;

  index = firstPostion + 1;
  while ( openParens && index < sentence.length ) {
    if ( sentence[index] === "(" ) {
      openParens++
    }
    else if ( sentence[index] === ")" && openParens > 1 ) {
      openParens--
    }
    else if ( sentence[index] === ")" && openParens === 1 ) {
      openParens--;
      return index;
    }
    index++;
  }
  throw new Error("no closing parens")

}