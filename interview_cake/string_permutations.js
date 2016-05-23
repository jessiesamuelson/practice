// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.

// getPermutations("cat") returns:
// [
// "cat",
// "cat",
// "cta",
// "act",
// "atc",
// "tca",
// "tac",
// ]

// getPermutations("cats") returns:
// [
// "cats",
// "cast",
// "csat",
// "scat",

// "ctas",
// "ctsa",
// "csta",
// "scta",

// "acts",
// "acst",
// "asct",
// "sact",

// "atcs",
// "atsc",
// "astc",
// "satc",

// "tcas",
// "tcsa",
// "tsca",
// "stca",

// "tacs",
// "tasc",
// "tsac",
// "stac",
// ]


function getPermutations(string) {
	var output = [string[0]];
  for (var i = 1; i < string.length; i++) {
  	output = addLetter(output, string[i])
  }
  return output;
}


	function addLetter (set, letter) {
		var wordLength = set[0].length;
		var newSet = [];
		for ( var i = 0; i < set.length; i ++ ) {
			for ( var j = 0; j <= wordLength; j++ ) {
         word = set[i].slice(0,j) + letter + set[i].slice(j, set[i].length);
         newSet.push(word)
			}
		}
		return newSet;
	}




var set = ["cat"];