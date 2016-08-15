AngularModule.factory( 'Table', [ 'Order', 'TABLE_STATUS', 'TABLE_TRANSLATION', 'TABLE_CLASS',
	function( Order, TABLE_STATUS, TABLE_TRANSLATION, TABLE_CLASS ) { 

	function Table ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Table.prototype = {

		get status() {
			return this._status;
		},

		set status( val ) {
			this._status = val;
			this.setTranslation();
			this.setClass();
		},

		get orders() {
			return this._orders;
		},

		set orders( val ) {
			var orders = val.map( function( element ) {
				return new Order( element );
			})
			orders.sort( function ( element1, element2 ) {
				return element1.order_number - element2.order_number;
			});
			this._orders = orders;
		},

		setData: function ( data ) {
			angular.extend( this, data );
		},

		setTranslation:  function () {
			for ( var status in TABLE_STATUS ) {
				if ( this.status === TABLE_STATUS[ status ] ) {
					this.translation = TABLE_TRANSLATION[ status ];
				}
			}
		},

		setClass:  function () {
			for ( var status in TABLE_STATUS ) {
				if ( this.status === TABLE_STATUS[ status ] ) {
					this.class = TABLE_CLASS[ status ];
				}
			}
		},

		getFirstOrder:  function () {
			if ( this.hasSomeOrder() ) {
				return this.orders[ 0 ];
			}
		},

		getLastOrder:  function () {
			if ( this.hasSomeOrder() ) {
				return this.orders[ this.orders.length - 1 ];
			}
		},

		isStatus:  function ( status ) {
			if ( this.status === TABLE_STATUS[ status ] ) {
				return true;
			}
			return false;
		},

		hasSomeOrder: function () {
			if ( JSON.stringify( this.orders ) !== '[]' ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Table );
}]);

AngularModule.constant( 'TABLE_STATUS', {
	'FREE': 0,
	'OCCUPIED': 1,
	'RESERVED': 2,
	'ORDER_CREATED': 3,
	'ORDER_PENDING': 4,
	'ORDER_ACCEPTED': 5,
	'ORDER_CLOSED': 6,
	'PENDING_REQUEST': 7
});

AngularModule.constant( 'TABLE_TRANSLATION', {
	'FREE': 'LIVRE',
	'OCCUPIED': 'OCUPADA',
	'RESERVED': 'RESERVADA',
	'ORDER_CREATED': 'PEDIDO CRIADO',
	'ORDER_PENDING': 'PEDIDO PENDENTE',
	'ORDER_ACCEPTED': 'PEDIDO ACEITO',
	'ORDER_CLOSED': 'PEDIDO FECHADO',
	'PENDING_REQUEST': 'AGUARDANDO PEDIDO'
});

AngularModule.constant( 'TABLE_CLASS', {
	'FREE': 'free',
	'OCCUPIED': 'occupied',
	'RESERVED': 'reserved',
	'ORDER_CREATED': 'order-created',
	'ORDER_PENDING': 'order-pending',
	'ORDER_ACCEPTED': 'order-accepted',
	'ORDER_CLOSED': 'order-closed',
	'PENDING_REQUEST': 'pending-request'
});

