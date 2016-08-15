AngularModule.factory( 'Promotion', [ function() { 

	function Promotion ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Promotion.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Promotion );
}]);
