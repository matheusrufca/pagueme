(function (AngularHelper) {

	//Diretiva para utilizar plugin PriceFormat

	AngularHelper.findOrCreateModule('nubo', []);

	angular
		.module('nubo')
		.directive('format', ['$filter', formatNumberDirective]);


	function formatNumberDirective($filter) {
		return {
			require: '?ngModel',
			link: function (scope, elem, attrs, ctrl) {
				if (!ctrl) return;


				ctrl.$formatters.unshift(function (a) {
					return $filter(attrs.format)(ctrl.$modelValue)
				});


				ctrl.$parsers.unshift(function (viewValue) {

					elem.priceFormat({
						prefix: '',
						centsSeparator: ',',
						thousandsSeparator: '.'
					});

					return elem[0].value;
				});
			}
		};
	};
})(window.AngularHelper);