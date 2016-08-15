(function (AngularHelper) {
	AngularHelper.findOrCreateModule('nubo', []);

	angular
		.module('nubo')
		.factory('apiServiceInterceptor', ['$q', 'apiServiceHandler', function ($q, apiServiceHandler) {
			return {
				// optional method
				'request': function (config) {
					console.log('request ' + config.url);
					// do something on success
					apiServiceHandler.isProcessing = true;

					return config;
				},

				// optional method
				'requestError': function (rejection) {
					console.log('request error');
					// do something on error
					//apiServiceHandler.isProcessing = false;

					return $q.reject(rejection);
				},

				// optional method
				'response': function (response) {
					apiServiceHandler.isProcessing = false;

					if (response && response.data) { console.log(response.data.message); }
					else { console.log('response') }

					return response;
				},

				// optional method
				'responseError': function (rejection) {
					console.log('responseError');
					// do something on error
					apiServiceHandler.isProcessing = false;
					return $q.reject(rejection);
				}
			};
		}
		]);

	angular
		.module('nubo')
		.config(['$httpProvider', function ($httpProvider) {
			$httpProvider.interceptors.push('apiServiceInterceptor');
		}
		]);
})(window.AngularHelper);
