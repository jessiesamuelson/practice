// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

var digits = [0,1,2,3,4,5,6,7,8,9];

function substringDivisibility( digits ) {
	var digits_copy1 = [];
	var digits_copy2 = [];
	var digits_copy3 = [];
	var tens = 0;
	var ones = 0;
	for (var ii = 0; ii < digits.length; ii++) {
    digits_copy1[ii] = digits[ii];
	}

	for (var i = digits.length - 1; i >=  0; i--) {
		// Build the first 3 digit num that will be divisible by two
		var num_by_two = 0
		num_by_two = digits_copy1[i] * 100;
		digits_copy1.splice(i,1);
		for (var jj = 0; jj < digits_copy1.length ; jj++){
			digits_copy2[jj] = digits_copy1[jj];
		}

		for (var j = digits_copy2.length - 1; j >=  0; j--) {
			num_by_two -= tens;
			tens = digits_copy2[j] * 10;
			num_by_two += tens;
			digits_copy2.splice(j,1);
      
      for (var kk = 0; kk < digits_copy2.length ; kk++){
				digits_copy3[kk] = digits_copy2[kk];
			}

			for (var k = digits_copy3.length - 1; k >=  0; k--) {
				num_by_two -= ones
				ones = digits_copy3[k];
				num_by_two += ones;
				digits_copy3.splice(k,1);
				if (num_by_two % 2 === 0) {
					// continue
					console.log(num_by_two);
				}
			}
		}

	}

}
