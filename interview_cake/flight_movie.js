// You've built an in-flight entertainment system with on-demand movie streaming.
// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory


var flightTime = 182;
var movieArray = [100, 75, 120];
var movieArray2 = [100, 83, 120];


function twoMovies(flightTime, movieArray) {
  var output = false;
  for ( var i = 0; i < movieArray.length; i++ ) {
    for ( j = 1; j < movieArray.length; j++ ) {
      if ( ( j !== i ) && ( movieArray[i] + movieArray[j] < flightTime ) ) output = true; 
    }
  }
  return output;
}

function twoMovies2(flightTime, movieArray) {
  var shortest = movieArray[0];
  var secondShortest;

  for ( var i = 1; i < movieArray.length; i++ ) {
    if ( movieArray[i] < shortest ) {
      secondShortest = shortest;
      shortest = movieArray[i];
    }
    else if ( movieArray[i] < secondShortest ) {
      secondShortest = movieArray[i];
    }
  }

  return shortest + secondShortest < flightTime;
}