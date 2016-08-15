AngularHelper.findOrCreateModule('devel.api', ['devel', 'ngResource']);


angular
	.module('devel.api')
	.service('apiServiceConfig', [function () {
		var apiConfig;

		apiConfig = {
			GET: {
				method: 'GET',
				responseType: 'json'
			},
			POST: {
				method: 'POST',
				responseType: 'json',
				headers: {
					'Content-Type': 'application/json'
				}
			},
			PUT: {
				method: 'PUT',
				responseType: 'json',
				headers: {
					'Content-Type': 'application/json'
				}
			},
			DELETE: {
				method: 'DELETE',
				responseType: 'json'
			}
		};


		return apiConfig;
	}]);

angular
	.module('devel.api')
	.service('apiService', ['$http','apiServiceConfig', function ($http, defaultConfig) {
		var self = this;


		self.get = function (url, params) {
			var config;

			// extend default config for GET calls
			config = angular.extend({
				url: url,
				params: params
			}, defaultConfig.GET);

			return $http(config);
		};

		self.post = function (url, data) {
			var config;

			// extend default config for POST calls
			config = angular.extend({
				url: url,
				data: JSON.stringify(data)
			}, defaultConfig.POST);

			return $http(config);
		};

		self.put = function (url, data) {
			var config;

			// extend default config for PUT calls
			config = angular.extend({
				url: url,
				data: JSON.stringify(data)
			}, defaultConfig.PUT);

			return $http(config);
		};

		self.delete = function (url, params) {
			var config;

			// extend default config for DELETE calls
			config = angular.extend({
				url: url,
				params: params
			}, defaultConfig.DELETE);

			return $http(config);
		};
	}]);