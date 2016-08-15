AngularModule.service( 'TableApi', [ '$http', '$q', 'NewHandlerService', 'WebStorageService',
	function( $http, $q, HandlerService, WebStorageService ) {

	return({
		listTables: listTables,
		loadTable: loadTable,
		loadOrder: loadOrder,
		createOrder: createOrder,
		cancelOrder: cancelOrder,
		acceptOrder: acceptOrder,
		closeOrder: closeOrder,
		addOrderItems: addOrderItems,
		removeOrderItems: removeOrderItems,
		checkoutOrder: checkoutOrder,
		addOrderPayment: addOrderPayment,
		cancelOrderPayment: cancelOrderPayment,
		finishOrder: finishOrder
	});

	function getLocation () {

		if ( WebStorageService.isSetLocalStorageItem( 'service_url' ) ) {
			return WebStorageService.getLocalStorageItem( 'service_url' );
		} else {
			return window.location.origin;
		}
	}

	function listTables () {

		var url = getLocation() + '/_rest/restaurant/table_list';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function loadTable ( tableData ) {

		var url = getLocation() + '/_rest/restaurant/table_details';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( tableData )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function loadOrder ( orderData ) {

		var url = getLocation() + '/_rest/restaurant/order_details';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( orderData )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}	

	function createOrder ( orderData ) {

		var url = getLocation() + '/_rest/restaurant/order_create';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( orderData )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function cancelOrder ( orderData ) {

		var url = getLocation() + '/_rest/restaurant/order_cancel';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( orderData )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function acceptOrder ( orderData ) {

		var url = getLocation() + '/_rest/restaurant/order_accept';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( orderData )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function closeOrder ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_close';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function addOrderItems ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_add_items';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function removeOrderItems ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_remove_items';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function checkoutOrder ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_checkout';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function addOrderPayment ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_payment_add';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function cancelOrderPayment ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_payment_cancel';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function finishOrder ( data ) {

		var url = getLocation() + '/_rest/restaurant/order_finish';

		var request = $http({
			method: 'POST',
			headers: {
				'Content-Type': undefined
			},
			url: url,
			data: JSON.stringify( data )
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

}]);
