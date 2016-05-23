// Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

// If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

// 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

// It can be seen that there are 3 fractions between 1/3 and 1/2.

// How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?
function countingFractions ( d ) {
  var count = 0;
  for (var i = 1; i <= Math.ceil(d / 2); i++){
    for (var j = 3; j <= d; j++){
      if ( i < d && i < j && highestCommonFactor(i,j) === 1 && i/j > 1/3 && i/ j < 1/2 ){
        count++
      }
    }
  }
  return count;
}

function highestCommonFactor( n, d ) {
  var nFactors = [];
  var dFactors = [];
  var hcf = 1;
  for (var i = 1; i <= n; i ++) {
    if (n % i === 0 && d % i === 0) {
      hcf = i
    }
  }
  return hcf;
}
