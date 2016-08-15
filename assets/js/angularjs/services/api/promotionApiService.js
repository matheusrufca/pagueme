AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('promotionApiService', ['$http', function ($http) {
			var self = this;
			var apiServiceUrl = apiServiceConfig.serviceUrl;

			//Chamadas _rest/promotion/promotion_item_list

			self.getPromotionItemList = function (dataObj, callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/promotion/promotion_item_list',
					method : 'GET',
					responseType : 'json',
					params : dataObj
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};

		}
	]);
