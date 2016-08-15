/// <reference path="../../views/management/genres.html" />

var AngularInit = (function () {
	var self = {};
	var angularModule = null;

	self.init = function () {
		_initModule();
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


	function _initModuleConfig() { };


	function _initControllers() {
		/* registra controller PageController */
		angularModule.controller("PageController", [
			'$rootScope', '$scope', '$timeout',
			PageController
		]);
	};


	return self;
})();

