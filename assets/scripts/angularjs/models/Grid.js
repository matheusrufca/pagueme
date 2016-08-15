AngularModule.factory( 'Grid', [ function() { 

	function Grid ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Grid.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Grid );
}]);
