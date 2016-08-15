AngularModule.service( 'ItemApi', [ '$http', '$q', 'NewHandlerService', 'WebStorageService',
	function( $http, $q, HandlerService, WebStorageService ) {

	return({
		listItems: listItems,
		listCategories: listCategories
	});

	function getLocation () {

		if ( WebStorageService.isSetLocalStorageItem( 'service_url' ) ) {
			return WebStorageService.getLocalStorageItem( 'service_url' );
		} else {
			return window.location.origin;
		}
	}

	function listItems () {

		var url = getLocation() + '/_rest/product/product_list_full';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function listCategories () {

		var url = getLocation() + '/_rest/product/category_tree_full';

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
