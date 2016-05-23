  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'otter',
    'paradigm'
];


function getRotate(arr) {
    var index = 0;
    var output;
    var done = false;
    check(arr);
    function check(arr){
        if (arr.length === 0) {
            done = true;
            output = -1;
        }
        else if (arr.length === 1) {
            done = true
            output = 0 + index
        }
        if (arr.length === 2) {
            done = true
            if ( arr[0] < arr[1] ){ output = index}
            else                  { output = index + 1;}
        }

        while (!done){
            var mid = Math.floor(arr.length/2);

            // check if this is the rotate
            if ( arr[mid] < arr[mid + 1] && arr[mid] < arr[mid -1] ){
                done = true
                output = index + mid;
            }
            else if ( arr[mid] < arr[arr.length-1] ) {
                // check end
                var slice = arr.slice(0,mid)
                check( slice)
            }
            else {
                // check start
                index += mid + 1;
                var slice = arr.slice(mid + 1)
                check( slice )
                
            } 
        }
        return output;
            
    }
    return output;
}














function getRotate2(arr) {
 
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
 
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor(minIndex + maxIndex / 2);
 
        if ( arr[currentIndex] < arr[currentIndex + 1] && arr[currentIndex] < arr[currentIndex-1] ){
            return currentIndex;
        }
        else if ( arr[currentIndex] < arr[maxIndex] ) {
            maxIndex = currentIndex - 1
        }
        else {
             minIndex = currentIndex + 1;
        }
    }
 
    return -1;
}


function binaryIndexOf(arr, searchElement) {
    
 
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = arr[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
}