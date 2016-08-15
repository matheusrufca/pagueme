AngularModule.filter( 'elapsedFilter' , function() {
	return function( date ) {
		var now = moment();
		var past = moment( date );
		return now.diff( past, 'minutes' );
	}
});
