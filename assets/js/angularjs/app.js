

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
		initFacebookConfigs(app);
		initUiRouterConfigs(app);
	};



	function initFacebookConfigs(app) {
		app.run(['$rootScope', '$window', 'authService', function ($rootScope, $window, authService) {
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
	}


	function initUiRouterConfigs(app) {
		app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$urlRouterProvider.when('/pagueme', '/');


			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'assets/views/home.html'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'assets/views/login.html'
				});


			$urlRouterProvider.when('/pagueme', '/');
			$urlRouterProvider.otherwise("/");

		}]);

		// fix view item cache 
		app.config(['$provide', function ($provide) {
			// Set a suffix outside the decorator function 
			var cacheBuster = Date.now().toString();
			

			$provide.decorator('$templateFactory', ['$delegate', function ($delegate) {
				var fromUrl = angular.bind($delegate, $delegate.fromUrl);
				$delegate.fromUrl = function (url, params) {
					if (url !== null && angular.isDefined(url) && angular.isString(url)) {
						url += (url.indexOf("?") === -1 ? "?" : "&");
						url += "v=" + cacheBuster;
					}

					return fromUrl(url, params);
				};

				return $delegate;
			}]);
		}]);

		app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
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



