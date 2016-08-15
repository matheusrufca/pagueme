(function (AngularHelper) {
	AngularHelper.findOrCreateModule('devel', ['toastr']);

	angular
		.module('devel')
		.factory('apiServiceHandler', function () {
			var self = {};

			self.isProcessing = false;
			self.log = [];

			return self;
		})
		.factory('apiServiceInterceptor', ['$q', 'apiServiceHandler', function ($q, apiServiceHandler) {
			return {
				// optional method
				'request': function (config) {
					console.debug('request: ' + config.url);
					// do something on success
					apiServiceHandler.isProcessing = true;

					return config;
				},

				// optional method
				'requestError': function (rejection) {
					console.debug('request_error');
					// do something on error
					apiServiceHandler.isProcessing = false;

					return $q.reject(rejection);
				},

				// optional method
				'response': function (response) {
					apiServiceHandler.isProcessing = false;

					console.debug('response:');
					console.debug(JSON.stringify(response.data));

					return response;
				},

				// optional method
				'responseError': function (rejection) {
					console.debug('response_error:');
					// do something on error
					apiServiceHandler.isProcessing = false;

					if (rejection.data) {
						toastr.error(rejection.data.statusMessage || 'Unknow error');
					}



					return $q.reject(rejection);
				}
			};
		}
		]);

	angular
		.module('devel')
		.config(['$httpProvider', function ($httpProvider) {
			$httpProvider.interceptors.push('apiServiceInterceptor');
		}
		]);
})(window.AngularHelper);
