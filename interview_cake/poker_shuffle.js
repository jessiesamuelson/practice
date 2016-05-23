// I suspect the online poker game I'm playing shuffles cards by doing a single " riffle ↴
// To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves
// half1 and half2.

// We'll represent a stack of cards as an array of integers in the range 1..521..52 (since there are 5252 distinct cards in a deck).

// A "riffle" is the standard way people shuffle cards by hand. You know, the thing that looks like this:


// Here's a rigorous definition of the riffle algorithm:

// 1. cut the deck into halves half1 and half2
// 2. grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffledDeck
// 3. grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffledDeck
// 4. repeat steps 2-3 until half1 and half2 are empty.

function checkDeck ( half1, half2, shuffledDeck ) {
  var output = true;
  if ( half1.length + half2.length === shuffledDeck.length ) {
    for ( var i = 0; i < shuffledDeck.length; i++) {
      if ( shuffledDeck[i] === half1[0] ) {
        half1.shift();
      }
      else if ( shuffledDeck[i] === half2[0] ) {
        half2.shift();
      }
      else output = false;
    }    
  }
  else output = false;
  return output;
}