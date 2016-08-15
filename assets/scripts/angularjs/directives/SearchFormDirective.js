AngularModule.directive( 'searchFormDirective', [ function () {

	return {
		restrict: 'ACE',
		scope: {
			search: '='
		},
		templateUrl: '../assets/js/angularjs/directives/SearchFormDirective.html',
		link: function ( scope, element, attrs ) {

			scope.openSearch = function () {

				$( '.search-form-wrapper.collapsed' ).hide();
				$( '.search-form-wrapper.expanded' ).show();
				$( '.search-form-group.expanded' ).width( '495px' );
				$( '.search-form-input.expanded' ).focus();
			};

			scope.closeSearch = function () {

				scope.search = undefined;

				$( '.search-form-wrapper.expanded' ).hide();
				$( '.search-form-wrapper.collapsed' ).show();
				$( '.search-form-group.collapsed' ).width( '120px' );
			};

			scope.executeSearch = function () {

				$( '.search-form-wrapper.expanded' ).hide();
				$( '.search-form-wrapper.collapsed' ).show();
				$( '.search-form-group.collapsed' ).width( '120px' );
			};

			scope.cleanSearch = function () {

				scope.search = undefined;
			};

			scope.isSearchExecuted = function () {

				if ( scope.search !== undefined ) {
					return true;
				}
				return false;
			};

		}
	}
}]);
