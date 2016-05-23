// Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.
// Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones
// takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations. When the drone
// comes back and lands, the ID is again added to the same array.

// After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back
// from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
// To track them down, we need to find their delivery ID.

// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

// The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were
// received, and some deliveries get cancelled before takeoff.

var arr = [3,3,4,1,5,2,2,1,4];

function findUnique(arr) {
  var counts = {};
  var val;
  for ( var i = 0; i < arr.length; i++ ) {
    val = arr[i]
    if ( counts[val] ) {
      counts[val] += 1;
    }
    else {
      counts[val] = 1;
    }
  }
  for ( var key in counts ) {
    if ( counts[key] % 2 === 1 ) {
      return key;
    }
  }
}

//////////////////////////////////////////////////////
function findUniqueDeliveryId(deliveryIds) {

  var idsToOccurrences = new Map();

  deliveryIds.forEach(function(deliveryId) {
    if (idsToOccurrences.has(deliveryId)) {
      var newCount = idsToOccurrences.get(deliveryId) + 1;
      idsToOccurrences.set(deliveryId, newCount);
    } else {
      idsToOccurrences.set(deliveryId, 1);
    }
  });

  for (var [id, count] of idsToOccurrences) {
    if (count === 1) {
        return id;
    }
  }
}

function findUnique2(arr) {

  var map = new Map();

  arr.forEach( function (x) {
    if ( map.has(x) ) {
      var count = map.get(x) + 1;
      map.set(x, count);
    } else {
      map.set(x, 1);
    }
  });

  for (var [key, value] of map) {
    if (value % 2 === 1) {
        return key;
    }
  }
}