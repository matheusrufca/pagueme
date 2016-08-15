AngularModule.directive( 'virtualKeyboardDirective', [ '$timeout', '$interval', 'VirtualKeyboardService', 
	function ( $timeout, $interval, VirtualKeyboardService ) {

	return {
		restrict: 'ACE',
		scope: {
			keyboardElement: '=',
			keyboardInput: '=',
			keyboardOutput: '=',
			keyboardType: '@',
			keyboardAuthRequired: '@',
			backward: '&',
			forward: '&'
		},
		templateUrl: '../assets/js/angularjs/directives/VirtualKeyboardDirective.html',
		link: function ( scope, element, attrs ) {

			scope.keyboard;

			angular.element( document ).ready( function () {
				$timeout( initKeyboard, 0 );
				$interval( getKeyboard, 1000 );
			});

			function initKeyboard () {

				scope.keyboard = {
					type: scope.keyboardType,
					element: scope.keyboardInput,
					authRequired: scope.keyboardAuthRequired,
					authProgress: false
				};

				VirtualKeyboardService.setKeyboard( scope.keyboard );
				VirtualKeyboardService.initKeyboard();
			}

			function getKeyboard () {

				scope.keyboard = VirtualKeyboardService.getKeyboard();
			}

			scope.backwardFunction = function () {

				$timeout( scope.backward, 1000 );
			};

			scope.forwardFunction = function () {
				
				if ( VirtualKeyboardService.concludeOperation() ) {
					scope.keyboardOutput = VirtualKeyboardService.getResult();
				}

				$timeout( scope.forward, 1000 );
			};

			scope.addDigit = function ( event ) {

				var digit = event.target.value;

				VirtualKeyboardService.addDigit( digit );
			};

			scope.removeDigit = function () {

				VirtualKeyboardService.removeDigit();
			};

			scope.isKeyboardType = function ( keyboardType ) {
				
				return VirtualKeyboardService.isKeyboardType( keyboardType );
			}

			scope.isAuthProgress = function () {

				return VirtualKeyboardService.isAuthProgress();
			}

		}
	}
}]);
