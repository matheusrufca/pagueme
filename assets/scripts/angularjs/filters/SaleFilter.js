AngularModule.filter( 'saleFilter', function () {
	return function ( sales, filter ) {

		if ( sales === undefined ) {
			return;
		}

		var filtered = [];

		if ( filter === undefined ) {
			filtered = sales;
		}
		if ( filter === 'daySales' ) {
			var now = moment();
			sales.forEach( function ( sale ) {
				var past = moment( sale.close_date );
				if ( now.dayOfYear() === past.dayOfYear() ) {
					filtered.push( sale );
				}
			});
		}
		if ( filter === 'weekSales' ) {
			var now = moment();
			sales.forEach( function ( sale ) {
				var past = moment( sale.close_date );
				if ( now.week() === past.week() ) {
					filtered.push( sale );
				}
			});
		}
		if ( filter === 'monthSales' ) {
			var now = moment();
			sales.forEach( function ( sale ) {
				var past = moment( sale.close_date );
				if ( now.month() === past.month() ) {
					filtered.push( sale );
				}
			});
		}
		if ( filter === 'thirtyDaysSales' ) {
			var now = moment();
			sales.forEach( function ( sale ) {
				var past = moment( sale.close_date );
				if ( now.diff( past, 'days' ) <= 30 ) {
					filtered.push( sale );
				}
			});
		}
		if ( filter === 'allSales' ) {
			filtered = sales;
		}
		return filtered;
	};
});
