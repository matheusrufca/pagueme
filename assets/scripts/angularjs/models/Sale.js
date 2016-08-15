AngularModule.factory( 'Sale', [ 'SALE_STATUS_CODE', 'SALE_STATUS_TEXT',
	function( SALE_STATUS_CODE, SALE_STATUS_TEXT ) { 

	function Sale ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Sale.prototype = {

		setData: function ( data ) {
			angular.extend( this, data );
		},

		updateStatusText: function () {
			for ( var saleStatus in SALE_STATUS_CODE ) {
				if ( this.sale_status === SALE_STATUS_CODE[ saleStatus ] ) {
					this.sale_status_text = SALE_STATUS_TEXT[ saleStatus ];
				}
			}
		},

		isSaleStatus:  function ( saleStatus ) {
			if ( this.sale_status === SALE_STATUS_CODE[ saleStatus ] ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	Object.defineProperty( Sale.prototype, 'sale_status', {
		get: function() {
			return this._sale_status;
		},
		set: function( val ) {
			this._sale_status = val;
			this.updateStatusText();
		}
	});

	Object.defineProperty( Sale.prototype, 'close_date', {
		get: function() {
			return this._close_date;
		},
		set: function( val ) {
			/*
			val = new Date( val.replace(/-/g,"/") );
			this._close_date = val.toISOString();
			*/
			this._close_date = moment( val ).format();
		}
	});

	return( Sale );
}]);

AngularModule.constant( 'SALE_STATUS_CODE' , {
	'OPEN': 1,
	'PAID': 2,
	'CANCELLED': 5
});

AngularModule.constant( 'SALE_STATUS_TEXT' , {
	'OPEN': 'EM ABERTO',
	'PAID': 'PAGO',
	'CANCELLED': 'CANCELADO'
});
