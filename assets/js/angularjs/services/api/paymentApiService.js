AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('paymentApiService', ['$http', 'apiServiceHandler', function ($http, apiServiceHandler) {
		var self = this;
		var apiServiceUrl = apiServiceConfig.serviceUrl;

		self.getPaymentMethodsList = function (callback, errorCallback) {
			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/payment/method_list',
				method: 'GET',
				responseType: 'json'
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.getPinpadDetail = function (data_id, callback, errorCallback) {

			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/payment/pinpad_read',
				method: 'GET',
				params: { id: data_id },
				responseType: 'json'
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};
	}]);

