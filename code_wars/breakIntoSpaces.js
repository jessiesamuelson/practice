var DICTIONARY = ["peanut", "butter", "pea", "nut", "stories"];

function breakIntoSpaces1 ( source ) {
	for ( var i = 0; i < source.length; i++ ) {
		var left = source.slice( 0, i );
		var right = source.slice( i, source.length );
		if ( DICTIONARY.indexOf( right ) >= 0 && DICTIONARY.indexOf( left ) >= 0 ) {
			return left + " " + right;
		}
	}
	return source;
}


// Extend this out to multiple words:
// We'll do this recursively
function outer ( source ) {

	var outputArray = [];
	var done        = false;
	var outputString;

	function breakIntoSpaces ( source ) {
		if ( DICTIONARY.indexOf( source ) >= 0  ) {
			outputArray.push( source );
			done = true;
		}
		if ( !done ) {

			for ( var i = 0; i < source.length; i++ ) {

				var left  = source.slice( 0, i );
				var right = source.slice( i, source.length );

				if ( DICTIONARY.indexOf( left ) >= 0  && !done ) {
					outputArray.push( left );
					breakIntoSpaces( right );
				}
				else if ( DICTIONARY.indexOf( right ) >= 0  && !done ) {
					outputArray.push( right );
					done = true;
				}
			}
		}
		else { outputString = outputArray.join(" "); }
	}

	if ( !done ) { breakIntoSpaces( source ); }

	return outputString;
}
