// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major
// European National Cake Vault. The message has been mostly deciphered, but all the words are backwards!
 // Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a string message and reverses the order of the words in-place ↴ .

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

var message = 'find you will pain only go you recordings security the into if';

function reverseWords(message){
  var message_array = message.split(" ");
  for ( var i = 0; i < Math.floor( message_array.length / 2 ); i++ ) {
    var temp = message_array[i];
    message_array[i] = message_array[message_array.length - i - 1];
    message_array[message_array.length - i - 1] = temp;
  }
  return message_array.join(" ");
}