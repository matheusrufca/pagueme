(function (AngularHelper) {

	AngularHelper.findOrCreateModule('nubo', []);

	angular
		.module('nubo')
		.directive('setFocus', setFocusDirective);


	function setFocusDirective() {
		return {
			scope: {
				setFocus: '='
			},
			link: function (scope, element) {
				if (scope.setFocus)
					element[0].focus();
			}
		};
	};
})(window.AngularHelper);