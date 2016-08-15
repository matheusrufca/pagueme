(function (AngularHelper, FieldsValidator) {
	AngularHelper.findOrCreateModule('nubo', []);

	angular
		.module('nubo')
		.directive('nbCpf', function () {
			return {
				require: 'ngModel',
				link: function (scope, elm, attrs, ctrl) {
					ctrl.$validators['cpf'] = function (modelValue, viewValue) {
						if (ctrl.$isEmpty(modelValue)) {
							// consider empty models to be valid
							return true;
						}

						return FieldsValidator.isCpfValid(modelValue);
					};
				}
			};
		});

	angular
		.module('nubo')
		.directive('nbCnpj', function () {
			return {
				require: 'ngModel',
				link: function (scope, elm, attrs, ctrl) {
					ctrl.$validators['cnpj'] = function (modelValue, viewValue) {
						if (ctrl.$isEmpty(modelValue)) {
							// consider empty models to be valid
							return true;
						}

						return FieldsValidator.isCnpjValid(modelValue);
					};
				}
			};
		});

	angular
		.module('nubo')
		.directive('nbCpfCnpj', function ($filter) {
			return {
				restrict: 'A', // limit usage to argument only				
				require: 'ngModel', // require NgModelController, i.e. require a controller of ngModel directive
				// create linking function and pass in our NgModelController as a 4th argument
				link: function (scope, element, attr, ctrl) {
					// please note you can name your function & argument anything you like
					function customValidator(modelValue, viewValue) {
						if (ctrl.$isEmpty(modelValue)) {
							// consider empty models to be valid
							return true;
						}

						if (FieldsValidator.isCpfValid(modelValue) || FieldsValidator.isCnpjValid(modelValue)) {
							ctrl.$setValidity('cpfCnpjValidator', true);
						} else {
							ctrl.$setValidity('cpfCnpjValidator', false);
						}


						// we need to return our modelValue, to be displayed to the user(value of the input)
						return modelValue;
					}

					// we need to add our customValidator function to an array of other(build-in or custom) functions
					// I have not notice any performance issues, but it would be worth investigating how much
					// effect does this have on the performance of the app
					ctrl.$parsers.push(customValidator);
				}
			};
		});

	angular
		.module('nubo')
		.directive('nbCep', function () {
			return {
				require: 'ngModel',
				link: function (scope, elm, attrs, ctrl) {
					ctrl.$validators['cep'] = function (modelValue, viewValue) {
						if (ctrl.$isEmpty(modelValue)) {
							// consider empty models to be valid
							return true;
						}


						return FieldsValidator.isCepValid(modelValue);
					};
				}
			};
		});

	angular
		.module('nubo')
		.directive('nbPhoneBr', function () {
			return {
				require: 'ngModel',
				link: function (scope, elm, attrs, ctrl) {
					ctrl.$validators['phoneBR'] = function (modelValue, viewValue) {
						if (ctrl.$isEmpty(modelValue)) {
							// consider empty models to be valid
							return true;
						}

						return FieldsValidator.isPhoneBrValid(modelValue);
					};
				}
			};
		});


})(window.AngularHelper, window.FieldsValidator);