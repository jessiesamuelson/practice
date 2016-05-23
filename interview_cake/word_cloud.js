// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are
//  words and the values are the number of times the words occured.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier
// and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

// 'After beating the eggs, Dana read the next step:'
// 'Add milk and eggs, then add flour and sugar.'

// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with
// a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

function wordMap ( sentence ) {
  sentence = sentence.toLowerCase();
  // remove punctuation
  sentence = sentence.replace(/\,|\:|\.|\(|\)|\?|\'|\"|\!/g, " ");
  sentence = sentence.replace(/\s{2}/g, " ");
  var sentenceArray = sentence.split(" ");
  var map = new Map();
  for ( var i = 0; i < sentenceArray.length; i++ ) {
    if ( map.has(sentenceArray[i]) ) {
      map.set( sentenceArray[i], map.get(sentenceArray[i]) + 1 );
    }
    else {
      map.set( sentenceArray[i], 1 );
    }
  }
  return map;
}

var sentence = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.';
var s = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."

function WordCloudData(inputString) {
  this.wordsToCounts = new Map();
  this.populateWordsToCounts(inputString);
}

WordCloudData.prototype = {
  populateWordsToCounts: function ( inputString ) {
    // iterates over each character in the input string, splitting
    // words and passing them to this.addWordToMap()

    var currentWord = '';
    for (var i = 0; i < inputString.length; i++) {
      var character = inputString.charAt(i);

      // if we reached the end of the string we check if the last
      // character is a letter and add the last word to our map
      if (i === inputString.length - 1) {
        if (this.isLetter(character)) currentWord += character;
        if (currentWord.length) this.addWordToMap(currentWord);

      // if we reach a space or emdash we know we're at the end of a word
      // so we add it to our map and reset our current word
      }
      else if (character === ' ' || character === '\u2014') {
        if (currentWord.length) this.addWordToMap(currentWord);
        currentWord = '';

      // we want to make sure we split on ellipses so if we get two periods in
      // a row we add the current word to our map and reset our current word
      }
      else if (character === '.') {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if (currentWord.length) this.addWordToMap(currentWord);
          currentWord = '';
        }

      // if the character is a letter or an apostrophe, we add it to our current word
      }
      else if (this.isLetter(character) || character === '\'') {
        currentWord += character;

      // if the character is a hyphen, we want to check if it's surrounded by letters
      // if it is, we add it to our current word
      }
      else if (character === '-') {
        if (i > 0 && this.isLetter(inputString.charAt(i-1)) && this.isLetter(inputString.charAt(i+1))) {
          currentWord += character;
        }
      }
    }
  },
  addWordToMap: function ( word ) {

    var newCount;

    // if the word is already in the map we increment its count
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);

    // if a lowercase version is in the map, we know our input word must be uppercase
    // but we only include uppercase words if they're always uppercase
    // so we just increment the lowercase version's count
    }
    else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word.toLowerCase(), newCount);

    // if an uppercase version is in the map, we know our input word must be lowercase.
    // since we only include uppercase words if they're always uppercase, we add the
    // lowercase version and give it the uppercase version's count
    }
    else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word));

    // otherwise, the word is not in the map at all, lowercase or uppercase
    // so we add it to the map
    }
    else {
      this.wordsToCounts.set(word, 1);
    }
  },
  capitalize: function ( word ) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  },
  isLetter: function ( character ) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }
}