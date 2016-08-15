AngularModule.factory( 'SaleSession', [ function() { 

	function SaleSession ( data ) {

		if ( data ) {
			this.setData( data );
		} else {
			this.setTotal( 0 );
		}

	};

	SaleSession.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		setTotal: function ( total ) {
			this.total = total;
		},

		isStatus: function ( status ) {
			if ( this.status !== undefined ) {
				return true;
			}
			return false;
		},

		isAmountDueReached: function () {
			if ( this.payment !== undefined ) {
				if ( this.payment.amount_due === 0 ) {
					return true;
				}
			}
			return false;
		},

		hasSomePayment: function () {
			if ( this.payment !== undefined ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( SaleSession );
}]);
