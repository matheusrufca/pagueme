/// <reference path="../../views/management/genres.html" />

var AngularInit = (function () {
	var self = {};
	var angularModule = null;

	self.init = function () {
		_initModule();
		_initModuleConfig();
		_initDirectives();
		_initFilters();
		_initControllers();
	};


	function _initModule() {
		/* Metronic App */
		angularModule = angular.module('app', [
			'ngAnimate',
			'ngSanitize',
			'ngMessages',
			'ngResource',
			'ngResource',
			'ui.router',
			'ui.bootstrap',
			'ui.select'
		]);
	};


	function _initModuleConfig() {
		angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			//$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('home', {
					url: '/',
					template: '<ui-view />'
				});

		}]);

		angularModule.config(['$provide', configureTemplateFactory]);

		angularModule.run(function ($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		});
	};


	function _initControllers() {
		/* registra controller PageController */
		angularModule.controller("PageController", [
			'$rootScope', '$scope', '$timeout', '$stateParams',
			PageController
		]);
	};


	function _initDirectives() {

	};

	function _initFilters() {

		/**
		 * AngularJS default filter with the following expression:
		 * "person in people | filter: {name: $select.search, age: $select.search}"
		 * performs an AND between 'name: $select.search' and 'age: $select.search'.
		 * We want to perform an OR.
		 */
		angularModule.filter('propsFilter', function () {
			return function (items, props) {
				var out = [];

				if (angular.isArray(items)) {
					var keys = Object.keys(props);

					items.forEach(function (item) {
						var itemMatches = false;

						for (var i = 0; i < keys.length; i++) {
							var prop = keys[i];
							var text = props[prop].toLowerCase();
							if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
								itemMatches = true;
								break;
							}
						}

						if (itemMatches) {
							out.push(item);
						}
					});
				} else {
					// Let the output be the input untouched
					out = items;
				}

				return out;
			};
		});
	};



	function configureTemplateFactory($provide) {
		// Set a suffix outside the decorator function 
		var cacheBuster = Date.now().toString();

		function templateFactoryDecorator($delegate) {
			var fromUrl = angular.bind($delegate, $delegate.fromUrl);
			$delegate.fromUrl = function (url, params) {
				if (url !== null && angular.isDefined(url) && angular.isString(url)) {
					url += (url.indexOf("?") === -1 ? "?" : "&");
					url += "v=" + cacheBuster;
				}

				return fromUrl(url, params);
			};

			return $delegate;
		}

		$provide.decorator('$templateFactory', ['$delegate', templateFactoryDecorator]);
	}


	return self;
})();

