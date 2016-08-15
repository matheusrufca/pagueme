AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('reportApiService', ['$http', function ($http) {
			var self = this;
			var apiServiceUrl = apiServiceConfig.serviceUrl;

			//Chamadas _rest/report/sales/bestseller

			self.getBestsellerList = function (dataObj, callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/report/sales/bestseller',
					method : 'POST',
					responseType : 'json',
					data : JSON.stringify(dataObj),
					headers : {
						'Content-Type' : undefined
					}
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};
		}
	]);

