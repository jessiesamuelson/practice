// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request about something they've been
// wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output
// 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

var amount = 4;
var denominations = [1,2,3];

function changePossibilitiesTopDown(amountLeft, denominationsLeft) {

  // base cases:
  // we hit the amount spot on. yes!
  if (amountLeft === 0) return 1;
  // we overshot the amount left (used too many coins)
  if (amountLeft < 0) return 0;
  // we're out of denominations
  if (denominationsLeft.length === 0) return 0;

  console.log('checking ways to make ' + amountLeft + ' with ' + denominationsLeft);

  // choose a current coin
  var currentCoin = denominationsLeft[0],
      restOfCoins = denominationsLeft.slice(1);

  // see how many possibilities we can get
  // for each number of times to use currentCoin
  var numPossibilities = 0;
  while (amountLeft >= 0) {
    numPossibilities += changePossibilitiesTopDown(amountLeft, restOfCoins);
    amountLeft -= currentCoin;
  }

  return numPossibilities;
}