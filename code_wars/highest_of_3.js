var arr = [5,2,3,6,9,8,2]

function highestOf3 (arr) {
  var highestProductOfThree = arr[0] * arr[1] * arr[2];
	var highestProductOf2 = arr[0] * arr[1];
	var highest = arr[0];
	var lowestProductOf2 = arr[0] * arr[1];;
	var lowest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if ( arr[i] > highest ) highest = arr[i];
    if ( arr[i] < lowest ) lowest = arr[i];
    if ( arr[i] * lowest < lowestProductOf2 ) lowestProductOf2 = arr[i] * lowest;
    if ( arr[i] * highest > highestProductOf2 ) highestProductOf2 = arr[i] * highest;
    var lows = lowest * lowestProductOf2;
    var highs = highest * highestProductOf2;
    if ( lows > highestProductOfThree ) highestProductOfThree = lows;
    if ( highs > highestProductOfThree ) highestProductOfThree = highs;
  }
  return highestProductOfThree;
}