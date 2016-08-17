/// <reference path="../../views/management/genres.html" />

var AngularInit = (function () {
	var self = {};
	var app = null;

	self.init = function () {
		_initModule();
		_initModuleConfig();
		_initControllers();
	};


	function _initModule() {
		/* Metronic App */
		app = angular.module('app', [
			'ngAnimate',
			'ngSanitize',
			'ngMessages',
			'ngResource',
			'ui.router',
			'ui.bootstrap',
			'ui.select',
			'devel'
		]);



		


	};


	function _initModuleConfig() {
		app.run(['$rootScope', '$window', 'authService', function ($rootScope, $window, authService) {
			$rootScope.user = {};

			$window.fbAsyncInit = function () {
				// Executed when the SDK is loaded

				FB.init({
					appId: '103754903408134',
					xfbml: true,
					version: 'v2.7',
					status: true
				});

				authService.watchAuthenticationStatusChange();
			};

			(function (d) {
				// load the Facebook javascript SDK

				var js,
				id = 'facebook-jssdk',
				ref = d.getElementsByTagName('script')[0];

				if (d.getElementById(id)) {
					return;
				}

				js = d.createElement('script');
				js.id = id;
				js.async = true;
				js.src = "//connect.facebook.net/pt_BR/all.js";

				ref.parentNode.insertBefore(js, ref);

			}(document));
		}]);
	};


	function _initControllers() {
		/* registra controller PageController */
		app.controller("PageController", [
			'$rootScope', '$scope', '$timeout', 'authService', 'facebookUser',
			PageController
		]);
	};

	return self;
})();



