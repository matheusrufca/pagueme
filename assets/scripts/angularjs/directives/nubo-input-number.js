// trigger events when scroll is at top or bottom

(function ($, AngularHelper) {
	if (!$) {
		console.error("Can't load 'nb-input-number: jQuery not loaded");
		return;
	}

	AngularHelper.findOrCreateModule('nubo.input-number', ['nubo']);

	angular
		.module('nubo.input-number')
		.directive('nbInputNumber', function () {
			return {
				restrict: 'AE',
				scope: {
					nbInputNumber: '@'
				},
				link: function (scope, elm, attrs) {
					var parentScope, value, inputModel, increaseButton, decreaseButton, numberInputContainer, minValue, maxValue;

					parentScope = scope.$parent;
					inputModel = scope.nbInputNumber;

					numberInputContainer = angular.element(elm);

					//inputValue = numberInputContainer.find('input[ng-model]')
					increaseButton = numberInputContainer.find('.increase');
					decreaseButton = numberInputContainer.find('.decrease');

					minValue = parseInt(attrs['min']);
					maxValue = parseInt(attrs['max']);


					if (increaseButton) {
						// bind increase button click
						increaseButton.bind("click", function () {
							var value = angular.copy(parentScope[inputModel]);

							if (!angular.isNumber(value)) {
								console.warn('nb-number-input: ngModel is not a number!');
								return;
							}

							if (maxValue < (value + 1)) { return; }

							// increase ng-Model value
							parentScope[inputModel] = value + 1;
							parentScope.$apply();
						});
					}

					if (decreaseButton) {
						decreaseButton.bind("click", function () {
							var value = angular.copy(parentScope[inputModel]);

							if (!angular.isNumber(value)) {
								console.warn('nb-number-input: ngModel is not a number!');
								return;
							}


							if (minValue > (value - 1)) { return; }

							// decrease ng-Model value
							parentScope[inputModel] = value - 1;
							parentScope.$apply();							
						});
					}
				}
			};

		});

})(window.jQuery, AngularHelper);

