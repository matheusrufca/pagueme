AngularModule.filter( 'countByFilter', function () {
	return function ( items, property ) {

		if ( items === undefined ) {
			return;
		}

		var filtered = {};

		if ( property === undefined ) {
			return;
		} else {
			items.map( function ( item ) { 
				if ( item[ property ] in filtered ) {
					filtered[ item[ property ] ] ++;
				} else {
					filtered[ item[ property ] ] = 1;
				} 
			});
		}
		return filtered;
	};
});
