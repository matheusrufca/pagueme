AngularModule.directive( 'digitalClockDirective', [ '$timeout', '$interval', 
	function ( $timeout, $interval ) {

	return {
		restrict: 'ACE',
		templateUrl: '../assets/js/angularjs/directives/DigitalClockDirective.html',
        replace: true,
		link: function ( scope ) {

			initializeClock();

			function initializeClock () {
				$timeout( updateClock , 0 );
				$interval( updateClock , 1000 );
			}

			function updateClock () {
			    scope.clock = moment().format( 'x' );
			}
		}
	}
}]);
