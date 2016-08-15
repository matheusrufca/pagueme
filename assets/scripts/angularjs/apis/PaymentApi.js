AngularModule.service( 'PaymentApi', [ '$http', '$q', 'NewHandlerService', 'WebStorageService',
	function( $http, $q, HandlerService, WebStorageService ) {

	return({
		listMethods: listMethods
	});

	function getLocation () {

		if ( WebStorageService.isSetLocalStorageItem( 'service_url' ) ) {
			return WebStorageService.getLocalStorageItem( 'service_url' );
		} else {
			return window.location.origin;
		}
	}

	function listMethods () {

		var url = getLocation() + '/_rest/payment/method_list';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

}]);
