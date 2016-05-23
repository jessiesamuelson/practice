// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function palindrome (string) {
	var hash = {};
	var odd = 0;
	for (var i = 0; i < string.length; i++) {
		if ( !hash[string[i]] ) {
			hash[string[i]] = 1;
		}
		else {
			hash[string[i]] += 1;
		}
	}

	for (var key in hash) {
		if ( hash[key] % 2 === 1 ) odd += 1
	}
  return odd <= 1;
 }