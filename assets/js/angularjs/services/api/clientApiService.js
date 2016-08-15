AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('clientApiService', ['$http', 'apiServiceHandler', function ($http, apiServiceHandler) {
		var self = this;
		var apiServiceUrl = apiServiceConfig.serviceUrl;

		self.isProcessing = function () {
			return apiServiceHandler.isProcessing;
		};

		self.getList = function (callback, errorCallback) {
			var config, serviceCallback, serviceFallback;

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/client/client_list',
				method: 'GET',
				responseType: 'json'
			};
			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.get = function (data_id, errorCallback) {
			var config, serviceCallback, serviceFallback, data;

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			data = { id: data_id };


			config = {
				url: apiServiceUrl + '/_rest/client/client_full',
				method: 'GET',
				params: data,
				responseType: 'json'
			};
			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};


		self.create = function (dataObj, callback, errorCallback) {
			var config, serviceCallback, serviceFallback;

			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/client/client_add',
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': undefined
				}
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.update = function (dataObj, callback, errorCallback) {
			if (apiServiceHandler.isProcessing === true) { return; }

			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/client/client_edit',
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': undefined
				}
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};
	}
	]);