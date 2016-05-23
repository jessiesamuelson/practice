// You created a game that is more popular than Angry Birds.
// You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

function sortScores ( unsorted, highest ) {
	var scores = new Array(highest);
	for ( var i = 0; i < scores.length; i++ ) {
		scores[i] = 0;
	}
	unsorted.forEach(function(x, i) {
		scores[ x ] += 1;
	})
	var output = [];
	for ( var i = 0; i < scores.length; i++ ) {
		for ( var j = 0; j < scores[i]; j ++) {
			output.push(i);
		}
	}
	return output;
}

var unsorted = [2,4,8,3,4,1,5,2,2,9,7]