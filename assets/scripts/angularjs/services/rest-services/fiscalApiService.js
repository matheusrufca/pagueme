AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('fiscalApiService', ['$http', 'apiServiceHandler', function ($http, apiServiceHandler) {
		var self = this;
		var apiServiceUrl = apiServiceConfig.serviceUrl;


		self.getSaleList = function (data_id, callback, errorCallback) {
			//if (apiServiceHandler.isProcessing === true) { return; }

			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/fiscal/sale_list',
				method: 'GET',
				responseType: 'json',
				params: { pos_id: data_id }
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.cancelSaleCoupon = function (data_id, callback, errorCallback) {
			if (apiServiceHandler.isProcessing === true) { return; }

			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/fiscal/sale_cancel',
				method: 'GET',
				responseType: 'json',
				params: { sale_id: data_id }
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.printSaleCoupon = function (dataObj, callback, errorCallback) {
			if (apiServiceHandler.isProcessing === true) { return; }

			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/fiscal/sale_print',
				method: 'GET',
				responseType: 'json',
				params: dataObj
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};
	}
	]);
