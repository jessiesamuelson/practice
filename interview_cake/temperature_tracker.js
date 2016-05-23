// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min,
// Mean and Mode Temperature Guarantee™.
// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(),
// and getMode()) over speeding up the insert() function.

// getMean() should return a float, but the rest of the getter functions can return integers. Temperatures
// will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll
// all be in the range 0..1100..110.

// If there is more than one mode, return any of the modes.

function TemperatureTracker () {
  this.temps = [];
  this.max;
  this.min;
  this.total = 0;
  this.length = 0;
  this.map = new Map();
}

TemperatureTracker.prototype = {
  insert: function(temp) {
    if ( temp > this.max || typeof this.max === 'undefined' ) this.max = temp;
    if ( temp < this.min || typeof this.min === 'undefined' ) this.min = temp;
    this.total += temp;
    this.length += 1;
    if ( this.map.has(temp) ) this.map.set(temp, this.map.get(temp) + 1);
    else                      this.map.set(temp, 1);
    this.temps.push(temp);
  },
  getMax: function() {
    return this.max;
  },
  getMin: function() {
    return this.min;
  },
  getMean: function() {
    if ( this.length ) return this.total / this.length;
    else               return 0;
  },
  getMode: function() {
    var appearances = 0;
    var mode;
    for ( var [key, value] of this.map ) {
      if ( value > appearances ) {
        appearances = value;
        mode        = key;
      }
    }
    return mode;
  }
}

var t = new TemperatureTracker();
t.insert(1)
t.insert(2)
t.insert(1)
t.insert(4)
t.insert(4)
t.insert(7)
t.insert(1)
t.insert(2)
t.insert(2)
t.insert(2)
t.insert(2)
t.insert(1)