AngularModule.filter( 'parseFilter' , function() {
	return function( chain ) {
		return parseInt( chain, 10 );
	}
});
