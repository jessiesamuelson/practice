function swap( arr, i, j ) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function quickSort(arr) {
	function partition( arr, left, right ) {
		if ( arr.length === 0 ) {
	    return arr;
		}

		var pivot = arr[ Math.floor( right + left / 2) ];
		var i = left;
		var j = right;

		while ( i <= j ) {
			while (arr[i] < pivot) {
				i++;
			}
			while (arr[j] > pivot) {
				j--;
			}

			if (i <= j) {
				swap(arr, i, j);
				i++;
				j++
			}
		}
		if( left < j ) { partition( arr, left, j ); }
	  if( i < right ) { partition( arr, i, right ); }
	}
	partition(arr, 0, arr.length -1)
	return arr;
	
}















// function QuickSortAlgorithm (arr) {

// 	function quickSort( arr, left, right ) {
// 		if ( arr.length === 0 ) {
//       return;
// 		}
// 		var pivot = arr[left + Math.ceil( (right - left) / 2 ) ];

// 		var i = left;
//     var j = right;
//     while ( i <= j ) {
//       while (arr[i] < pivot) { i++; }
//       while (arr[j] > pivot) { j--; }
//       if (i <= j) {
//         exchange( arr, i, j );
//         i++;
//         j--;
//       }
//     }
//     if( left < j ) { quickSort( arr, left, j ); }
//     if( i < right ) { quickSort( arr, i, right ); }
// 	}

// 	quickSort( arr, 0, arr.length - 1 )

// 	function exchange( arr, i, j ) {
// 		var temp = arr[i];
// 		arr[i] = arr[j];
// 		arr[j] = temp;
// 	}
// 	return arr;
// }