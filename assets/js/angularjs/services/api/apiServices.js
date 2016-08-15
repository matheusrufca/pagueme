AngularHelper.findOrCreateModule('devel.api', ['devel', 'ngResource']);


angular
	.module('devel.api')
	.factory('Genres', ['$http', '$resource', function ($http, $resource) {
		return $resource('/api/genres/:id'); // Note the full endpoint address

		return $resource('/api/genres/:id', { id: '@_id' }, {
			'query': { method: 'GET', isArray: false },
			'update': { method: 'PUT' }
		});
	}
	]);




angular
	.module('devel.api')
	.service('genresApiService', ['$http', 'apiService', function ($http, apiService) {
		var self = this;

		self.getList = function () {
			var serviceCallback, serviceFallback;

			return apiService.get('/api/genres/');
		};

		self.get = function (data_id) {
			var serviceCallback, serviceFallback;

			return apiService.get('/api/genres/' + data_id);
		};



		self.add = function (dataObj) {
			var serviceCallback, serviceFallback;

			return apiService.post('/api/genres/', dataObj);
		};

		self.edit = function (data_id, dataObj) {
			var serviceCallback, serviceFallback;

			return apiService.put('/api/genres/' + data_id, dataObj);
		};

		self.delete = function (data_id) {
			var serviceCallback, serviceFallback;

			return $http('/api/genres/' + data_id);
		};

		
		self.getStyles = function (data_id) {
			var serviceCallback, serviceFallback;

			return apiService.get('/api/genres/' + data_id + '/styles/');

		};
	}
	]);

AngularHelper.findOrCreateModule('devel.domain', ['devel.api']);

angular
	.module('devel.domain')
	.service('genresService', ['genresApiService', function (genresApiService) {
		var self = this;

		self.getList = function (callback, errorCallback) {
			return genresApiService.getList().then(callback, errorCallback);
		};

		self.get = function (item_id, callback, errorCallback) {
			return genresApiService.get(item_id).then(callback, errorCallback);
		};


		self.add = function (item, callback, errorCallback) {
			return genresApiService.add(item).then(callback, errorCallback);
		};

		self.edit = function (item_id, item, callback, errorCallback) {
			return genresApiService.edit(item_id, item).then(callback, errorCallback);
		};

		self.upsert = function (item, callback, errorCallback) {
			var methodFn;

			if (!item) { return console.error("Model is null"); }


			if (item.id) {
				methodFn = self.edit(item.id, item);
			} else {
				methodFn = self.add(item);
			}

			return methodFn.then(callback, errorCallback);
		};

		self.delete = function (item_id, callback, errorCallback) {
			return genresApiService.delete(item_id).then(callback, errorCallback);
		};

		self.getStyles = function (item_id, callback, errorCallback) {
			return genresApiService.getStyles(item_id).then(callback, errorCallback);
		};
	}
	]);