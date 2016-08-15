AngularModule.factory( 'PaymentMethod', [ function() { 

	function PaymentMethod ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	PaymentMethod.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( PaymentMethod );
}]);
