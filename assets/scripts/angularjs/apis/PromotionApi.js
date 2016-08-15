AngularModule.service( 'PromotionApi', [ '$http', '$q', 'NewHandlerService', 'WebStorageService',
	function( $http, $q, HandlerService, WebStorageService ) {

	return({
		listPromotions: listPromotions,
		readPromotion: readPromotion,
		readPromotionRule: readPromotionRule
	});

	function getLocation () {

		if ( WebStorageService.isSetLocalStorageItem( 'service_url' ) ) {
			return WebStorageService.getLocalStorageItem( 'service_url' );
		} else {
			return window.location.origin;
		}
	}

	function listPromotions () {

		var url = getLocation() + '/_rest/promotion/promotion_list';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function readPromotion ( promotion ) {

		var url = getLocation() + '/_rest/promotion/promotion_read';

		var request = $http({
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
			url: url,
			params: promotion
		});

		return( request.then( HandlerService.handleSuccess, HandlerService.handleError ) );
	}

	function readPromotionRule ( promotion ) {

		var url = getLocation() + '/_rest/promotion/promotion_rule_read';

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
