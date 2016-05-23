// Write a function to reverse a string in-place ↴ .
// Since strings in JavaScript are immutable ↴ , first convert the string into an array of characters, do the in-place reversal on that array,
// and re-join that array into a string before returning it. This isn't technically "in-place," and the array of characters will cost O(n)O(n)
// additional space, so if you're comfortable coding in a language with mutable strings, that'd be even better!

function reverseString(string) {
  var array = string.split("");
  for ( var i = 0; i < Math.floor(arr.length / 2); i++ ) {
    var temp = array[i];
    array[i] = array[ array.length - i - 1 ];
    array[ array.length - i - 1 ] = temp
  }
  return array.join("");
}