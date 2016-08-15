AngularModule.directive( 'itemCategoriesDirective', [ '$timeout', '$interval',  
	function ( $timeout, $interval ) {

	return {
		restrict: 'ACE',
		scope: {
			itemCategories: '=',
			category: '='
		},
		templateUrl: '../assets/js/angularjs/directives/ItemCategoriesDirective.html',
		link: function ( scope, element, attrs ) {

			scope.toogleCategory = function ( category ) {

				if ( category === undefined ) {
					return;
				}

				if ( scope.category === undefined ) {
					scope.category = category;
				} else {
					if ( scope.category.id === category.id ) {
						scope.category = undefined;
					} else {
						scope.category = category;
					}
				}
			};

			scope.isCategorySelected = function ( category ) {

				if ( category === undefined ) {
					return false;
				}

				if ( scope.category === undefined ) {
					return false;
				} else {
					if ( scope.category.id === category.id ) {
						return true;
					}
				}
				return false;
			};

		}
	}
}]);
