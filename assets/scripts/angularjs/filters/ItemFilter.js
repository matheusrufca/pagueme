AngularModule.filter( 'itemFilter', function () {
	return function ( items, filter ) {

		if ( items === undefined ) {
			return;
		}

		var filtered = [];

		if ( filter === undefined ) {
			filtered = items;
		}
		if ( filter === 'onSale' ) {
			items.forEach( function ( item ) {
				if ( item.stock ) {
					if ( item.price < item.base_price ) {
						filtered.push( item );
					}
				}
			});
		}
		if ( filter === 'bestSale' ) {
			items.forEach( function ( item ) {
				if ( item.stock ) {
					if ( item.stock.avaiable_units > 48 ) {
						filtered.push( item );
					}
				}
			});
		}
		return filtered;
	};
});
