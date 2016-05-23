// You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function
// rand7() that generates a random integer from 1 to 7.

// rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.

// 5^n / 7?

// var results = [
//   [1,2,3,4,5],
//   [6,7,1,2,3],
//   [4,5,6,7,1],
//   [2,3,4,5,6],
//   [7,1,2,3,4],
// ];

function rand5() {
  return Math.floor(Math.random() * 5) + 1 
}

function rand7Table() {

  var results = [
    [1,2,3,4,5],
    [6,7,1,2,3],
    [4,5,6,7,1],
    [2,3,4,5,6],
    [7,0,0,0,0],
  ];

  while (true) {

    // do our die rolls
    var row = rand5() - 1;
    var column = rand5() - 1;

    // case: we hit an extraneous outcome
    // so we need to re-roll
    if (row === 4 && column > 0) {
      continue;
    }

    // our outcome was fine. return it!
    return results[row][column];
    // return getResult(row, column);
  }
}

function getResult(row, column) {
  var result = row * 5 + column + 1;
  result = ( result % 7 ) + 1
  return result;
}

function rand7Other() {
  while (true) {
    var roll1 = rand5() - 1;
    var roll2 = rand5();

    var outcome = roll1 * 5 + roll2;

    if (outcome > 21) { continue }

    return outcome % 7 + 1;
  }
}

[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
]