AngularModule.factory( 'PointOfSale', [ 'POS_STATUS', 'POS_TRANSLATION', 'POS_CLASS',
	function( POS_STATUS, POS_TRANSLATION, POS_CLASS ) { 

	function PointOfSale ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	PointOfSale.prototype = {

		get pos_status() {
			return this._pos_status;
		},

		set pos_status( val ) {
			this._pos_status = val;
			this.setTranslation();
			this.setClass();
		},

		setData: function ( data ) {
			angular.extend( this, data );
		},

		setTranslation:  function () {
			for ( var pos_status in POS_STATUS ) {
				if ( this.pos_status === POS_STATUS[ pos_status ] ) {
					this.translation = POS_TRANSLATION[ pos_status ];
				}
			}
		},

		setClass:  function () {
			for ( var pos_status in POS_STATUS ) {
				if ( this.pos_status === POS_STATUS[ pos_status ] ) {
					this.class = POS_CLASS[ pos_status ];
				}
			}
		},

		isStatus:  function ( pos_status ) {
			if ( this.pos_status === POS_STATUS[ pos_status ] ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( PointOfSale );
}]);

AngularModule.constant( 'POS_STATUS', {
	'FREE': 0,
	'SELLING': 1,
	'CONNECTED': 2
});

AngularModule.constant( 'POS_TRANSLATION', {
	'FREE': 'LIVRE',
	'SELLING': 'EM VENDA',
	'CONNECTED': 'CONECTADO'
});

AngularModule.constant( 'POS_CLASS', {
	'FREE': 'pos free',
	'SELLING': 'pos selling',
	'CONNECTED': 'pos connected'
});
