AngularModule.service( 'PointOfSaleApi', [ '$http', '$q', 'NewHandlerService', 'WebStorageService',
	function( $http, $q, HandlerService, WebStorageService ) {

	return({
		listPointsOfSale: listPointsOfSale,
		readPointOfSale: readPointOfSale,
		leasePointOfSale: leasePointOfSale,
		releasePointOfSale: releasePointOfSale,
		createSaleSession: createSaleSession,
		cancelSaleSession: cancelSaleSession,
		addSaleSessionItem: addSaleSessionItem,
		removeSaleSessionItem: removeSaleSessionItem,
		updateSaleSessionItem: updateSaleSessionItem,
		addSaleSessionPayment: addSaleSessionPayment,
		orderSaleSession: orderSaleSession,
		finishSaleSession: finishSaleSession,
		listSales: listSales,
		cancelSaleCoupon: cancelSaleCoupon,
		printSaleCoupon: printSaleCoupon
	});

	function getLocation () {

		if ( WebStorageService.isSetLocalStorageItem( 'service_url' ) ) {
			return WebStorageService.getLocalStorageItem( 'service_url' );
		} else {
			return window.location.origin;
		}
	}

	function listPointsOfSale () {

		var url = getLocation() + '/_rest/pos/pos_list';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function readPointOfSale ( pointOfSaleId ) {

		var url = getLocation() + '/_rest/pos/pos_read?id=' + pointOfSaleId;

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function leasePointOfSale ( pointOfSale ) {

		var url = getLocation() + '/_rest/pos/pos_lease';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( pointOfSale )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function releasePointOfSale ( pointOfSale ) {

		var url = getLocation() + '/_rest/pos/pos_release';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( pointOfSale )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function createSaleSession ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_create';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function cancelSaleSession ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_cancel';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function addSaleSessionItem ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_item_add';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function removeSaleSessionItem ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_item_remove';

		var request = $http({
			method: 'DELETE',
			headers: {
				'Content-Type': undefined
			},
			responseType: 'JSON',
			url: url,
			params: saleItem
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function updateSaleSessionItem ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_item_update';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function addSaleSessionPayment ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_payment_add';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function orderSaleSession ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_order';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function finishSaleSession ( saleItem ) {

		var url = getLocation() + '/_rest/pos/sale_session_finish';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( saleItem )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function listSales ( pointOfSaleId ) {

		var url = getLocation() + '/_rest/fiscal/sale_list?pos_id=' + pointOfSaleId;

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function cancelSaleCoupon ( saleId ) {

		var url = getLocation() + '/_rest/fiscal/sale_cancel?sale_id=' + saleId;

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function printSaleCoupon ( saleItem ) {

		var url = getLocation() + '/_rest/fiscal/sale_print';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			responseType: 'JSON',
			url: url,
			params: saleItem
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

}]);
