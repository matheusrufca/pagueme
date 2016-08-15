AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('productCategoryApiService', ['$http', function ($http) {
			var self = this;
			var apiServiceUrl = apiServiceConfig.serviceUrl;

			//Chamadas _rest/productcategory

			self.getListFull = function (callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/product/category_list_full',
					method : 'GET',
					responseType : 'json'
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};

			self.getList = function (callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/product/category_list',
					method : 'GET',
					responseType : 'json'
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};

			self.getTree = function (callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/product/category_tree',
					method : 'GET',
					responseType : 'json'
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};

			self.getTreeFull = function (callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/product/category_tree_full',
					method : 'GET',
					responseType : 'json'
				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};

			self.get = function (category_id, callback, errorCallback) {
				var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
				var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

				var config = {
					url : apiServiceUrl + '/_rest/product/category_details',
					method : 'GET',
					params : {
						id : category_id
					},
					responseType : 'json'

				};

				return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
			};
		}
	]);

