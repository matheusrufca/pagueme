AngularModule.filter( 'itemCategoryFilter', function () {
	return function ( items, category ) {

		if ( items === undefined ) {
			return;
		}

		var filtered = [];

		if ( category === undefined ) {
			filtered = items;
		} else {
			items.forEach( function ( item ) {
				if ( item.category.id === category.id ) {
					filtered.push( item );
				} else {
					//var parentCategory = item.category.full_name.substr( 0, item.category.full_name.indexOf( ':' ) );
					var parentCategory = item.category.full_name.split( ':' )[ 0 ];
					if ( parentCategory == category.full_name ) {
						filtered.push( item );
					}
				}
			});
		}
		return filtered;
	};
});
