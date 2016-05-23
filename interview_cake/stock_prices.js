// Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could
// have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);

// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit ( prices ) {
  if ( prices.length < 2 ) { throw new Error('Getting a profit requires two prices') }
  var lowest = prices[0];
  var maxProfit = prices[1] - prices[0];
  var currentProfit;
  for ( var i = 1; i < prices.length; i++ ) {
    currentProfit = prices[i] - lowest;
    // if ( currentProfit > maxProfit ) { maxProfit = currentProfit; }
    maxProfit = Math.max( maxProfit, currentProfit );
    // if ( prices[i]     < lowest    ) { lowest    = prices[i];     }
    lowest = Math.min( prices[i], lowest );
  }
  return maxProfit;
}