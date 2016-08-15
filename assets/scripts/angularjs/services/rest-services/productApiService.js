AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('productApiService', ['$http', function ($http) {
			var self = this;
			var apiServiceUrl = apiServiceConfig.serviceUrl;

			self.getListFull = function (callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);
				var config = {
					url : apiServiceUrl + '/_rest/product/product_list_full',
					method : 'GET',
					responseType : 'json'
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};
		}
	]);
