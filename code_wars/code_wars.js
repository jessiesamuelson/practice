console.log("hi");
function isMerge(s, part1, part2) {

  var j = 0; var k = 0;
  for ( var i = 0; i < s.length; i++ ) {
    if (      part1[j] === s[i] ) { j++; }
    else if ( part2[k] === s[i] ) { k++; }
    else                  { return false }
  }
  if ( j === part1.length && k === part2.length ) { return true }
  else { return false; }
}

function guessGifts(wishlist, presents) {
  var guesses = [];
  for ( var i = 0; i < presents.length; i++ ) {
    for ( var j = wishlist.length - 1; j >= 0; j--  ) {
      if ( presents[i].size === wishlist[j].size && presents[i].clatters === wishlist[j].clatters && presents[i].weight === wishlist[j].weight ) {
        guesses.push( wishlist[j].name );
        wishlist.splice( j, 1 );
      }
    }
  }
  return guesses;
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"





function formatDuration (seconds) {
  var string = "";
  var hash = {};
  var arr = [];
  if ( seconds === 0 ) {
    string = "now";
  }
  else {
    var minutes = Math.floor( seconds / 60 );
    seconds     = seconds % 60;

    var hours = Math.floor( minutes / 60 );
    minutes   = minutes % 60;

    var days = Math.floor( hours / 24 );
    hours = hours % 24;

    var years = Math.floor( days / 365 );
    days = days % 365;

    hash["seconds"] = seconds;
    hash["minutes"] = minutes;
    hash["hours"]   = hours;
    hash["days"]    = days;
    hash["years"]   = years;
    if ( hash.years )   {
    if ( hash.years === 1) {arr.push( hash.years +  " year") }
      else { arr.push( hash.years +  " years") }
    }
    if ( hash.days )   {
      if ( hash.days === 1) { arr.push( hash.days +  " day") }
      else { arr.push( hash.days +  " days") }
    }
    if ( hash.hours )   {
      if ( hash.hours === 1) { arr.push( hash.hours +  " hour") }
      else { arr.push( hash.hours +  " hours") }
    }
    if ( hash.minutes )   {
      if ( hash.minutes === 1) { arr.push( hash.minutes +  " minute") }
      else { arr.push( hash.minutes +  " minutes") }
    }
    if ( hash.seconds )   {
      if ( hash.seconds === 1) { arr.push( hash.seconds +  " second") }
      else { arr.push( hash.seconds +  " seconds") }
    }
    var string1 = "";
    var string2 = "";
    if ( arr.length > 2 ) {
      var arr1 = arr.slice( 0, arr.length - 2 );
      string1 = arr1.join(", ");
    }
    if ( arr.length > 1 ) {
      var arr2 = arr.slice( arr.length - 2, 3 );
      string2 = arr2.join(" and ");
    }
    if ( arr.length === 1 ) {
      string2 += arr[0];
    }
    if ( string1 ) {
      string = string1 + ", " + string2;
    }
    else {
      string = string2; 
    }
  }
  
  return string;
}

































Expected: 182 days, 1 hour, 44 minutes and 40 seconds, instead got: 182 days, 1 hour, 44 minutes

