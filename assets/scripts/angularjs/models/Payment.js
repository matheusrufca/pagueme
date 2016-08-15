AngularModule.factory( 'Payment', [ function() { 

	function Payment ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Payment.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		setMethodId: function ( methodId ) {
			this.method_id = methodId;
		},
		
		setValue: function ( value ) {
			this.value = value;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Payment );
}]);
