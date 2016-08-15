AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('pointOfSaleApiService', ['$http', 'apiServiceHandler', function ($http, apiServiceHandler) {
		var self = this;
		var apiServiceUrl = apiServiceConfig.serviceUrl;

		self.isProcessing = function () {
			return apiServiceHandler.isProcessing;
		};

		self.getList = function (callback, errorCallback) {
			var serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			var serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			var config = {
				url: apiServiceUrl + '/_rest/pos/pos_list',
				method: 'GET',
				responseType: 'json'
			};
			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};


		self.getSaleInfo = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			//if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/pos_read',
				method: 'GET',
				responseType: 'json',
				params: dataObj
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.getSaleSessionInfo = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			//if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_read',
				method: 'GET',
				responseType: 'json',
				params: dataObj
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};


		self.createSale = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			//if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback, true);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_create',
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

		self.finishSale = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			//if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_finish',
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


		self.lease = function (data_id, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/pos_lease',
				method: 'POST',
				responseType: 'json',
				data: {
					id: data_id
				},
				headers: {
					'Content-Type': undefined
				}
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.release = function (data_id, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/pos_release',
				method: 'POST',
				responseType: 'json',
				data: {
					id: data_id
				},
				headers: {
					'Content-Type': undefined
				}
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};



		self.checkToken = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			//if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback, true);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/pos_check_lease',
				method: 'GET',
				responseType: 'json',
				params: dataObj
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.reopen = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_reopen',
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

		self.orderSale = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_order',
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

		self.cancelSale = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_cancel',
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

		self.addSaleItem = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_item_add',
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': undefined
				}
			};

			//delete $httpProvider.defaults.headers.post['Content-type'];

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.updateSaleItem = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_item_update',
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

		self.removeSaleItem = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_item_remove',
				method: 'DELETE',
				responseType: 'json',
				//data: JSON.stringify(dataObj),
				params: dataObj,
				headers: {
					//'Content-Type': 'application/json'
					'Content-Type': undefined
				}
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

	

		

		self.getPaymentList = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_payment_list',
				method: 'GET',
				params: dataObj,
				responseType: 'json'
			};

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.addPayment = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_payment_add',
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': undefined
				}
			};

			//delete $httpProvider.defaults.headers.post['Content-type'];

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};

		self.cancelPayment = function (dataObj, callback, errorCallback) {
			var serviceCallback, serviceFallback, config;
			if (apiServiceHandler.isProcessing === true) { return; }

			serviceCallback = apiServiceConfig.wrapperCallback(callback, errorCallback);
			serviceFallback = apiServiceConfig.wrapperErrorCallback(errorCallback);

			config = {
				url: apiServiceUrl + '/_rest/pos/sale_session_payment_cancel',
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': undefined
				}
			};

			//delete $httpProvider.defaults.headers.post['Content-type'];

			return $http(config)
				.success(serviceCallback)
				.error(serviceFallback);
		};
	}
	]);