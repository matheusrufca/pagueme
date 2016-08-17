
(function (AngularHelper) {
	AngularHelper.findOrCreateModule('devel', []);


	angular
		.module('devel')
		.factory('facebookUser', [function () {
			var self = {};

			return self;
		}]);

	angular
		.module('devel')
		.factory('facebookService', ['$q', function ($q) {
			return {
				getMyLastName: function () {
					var deferred = $q.defer();
					FB.api('/me', {
						fields: 'last_name'
					}, function (response) {
						if (!response || response.error) {
							deferred.reject('Error occured');
						} else {
							deferred.resolve(response);
						}
					});
					return deferred.promise;
				}
			}
		}]);


	angular
		.module('devel')
		.service('authService', ['$q', 'facebookUser', function ($q, facebookUser) {
			var _self = {};
			var self = this;


			self.facebookUser = {};


			self.watchAuthenticationStatusChange = function () {
				FB.Event.subscribe('auth.authResponseChange', function (res) {

					if (res.status === 'connected') {
						self.getUserInfo();
					}
					else {
						//destroy session
					}

				});
			};



			self.getUserInfo = function () {

				var _self = this;

				FB.api('/me', function (response) {
					self.facebookUser = response;
				});
			};

			self.logout = function () {
				var _self = this;

				FB.logout(function (response) {
					self.facebookUser = {};
				});
			}

		}]);
})(window.AngularHelper);
