// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

var array = [1,7,3,4];
var array2 = [1, 2, 6, 5, 9]

// BRUTE FORCE
function getBruteProd( array ) {
  var products_array =[];
  var product;
  for (var i = 0; i < array.length; i++) {
    product = 1;
    for (var j = 0; j < array.length; j++){
      if ( j !== i ) product *=  array[j];
    }
    products_array.push(product);
  }
  return products_array;
}


function getGreedyProd( array ) {
  var prodSoFar = 1;
  var prodArray = [];
  var indexProd = 1;
  for (var i = 0; i < array.length; i++){
    indexProd = prodSoFar;
    prodSoFar *= array[i];
    for (var j = i + 1; j < array.length; j++){
      indexProd *= array[j];
    }
    prodArray.push(indexProd);
  }
  return prodArray;
}

function getGreediestProd( array ) {
  var prodSoFar = 1;
  var prodSoFarArray = [];
  if (array.length < 2) throw new Error('Getting a product of others requires others, that is at least two things silly');
  for (var i = 0; i < array.length; i++){
    prodSoFar *= array[i];
    prodSoFarArray.push(prodSoFar);
  }

  var prodFromBack = 1;
  var prodFromBackArray = [];
  for (var j = array.length - 1; j >= 0; j--){
    prodFromBack *= array[j];
    prodFromBackArray.push(prodFromBack);
  }

  var prodOfOthers = 1;
  var prodOfOthersArray = [];
  for (var k = 0; k < array.length; k++) {
    prodOfOthers = 1;
    if ( k >= 1 ) prodOfOthers *= prodSoFarArray[k-1];
    if ( k < array.length - 1 ) prodOfOthers *= prodFromBackArray[array.length- k - 2];
    prodOfOthersArray.push(prodOfOthers)
  }
  return prodOfOthersArray;
}

  function getProductsOfAllIntsExceptAtIndex(intArray) {

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}

// i = 4
// j = 1
// var array = [1,7,3,4];
// productSoFar = 84
// productsOfAllIntsExceptAtIndex = [84, 12, 28, 21]