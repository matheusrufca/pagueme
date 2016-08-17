function PageController($rootScope, $scope, $timeout, $stateParams, authService, facebookUser) {



	$scope.payBill = function () {
		console.debug('pay');
	};

	$scope.createBill = function () {
		console.debug('own');
	};



	$scope.$watch('authService.facebookUser', function (newValue, oldValue) {
		console.debug(JSON.stringify(newValue));
	});

	$rootScope.$watch('$state', function (newValue, oldValue) {
		//console.log([newValue.current.name, ' - ', oldValue.current.name].join(''));
	});

	$rootScope.$on('$stateChangeStart',
		function (event, toState, toParams, fromState, fromParams) {
			console.debug(toState.name)
		});



};