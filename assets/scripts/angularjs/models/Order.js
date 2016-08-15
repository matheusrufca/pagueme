AngularModule.factory( 'Order', [ 'Item', 'ORDER_STATUS', 'ORDER_TRANSLATION', 'ORDER_CLASS',
	function( Item, ORDER_STATUS, ORDER_TRANSLATION, ORDER_CLASS ) { 

	function Order ( data ) {

		if ( data ) {
			this.setData( data );
		}

	};

	Order.prototype = {

		get status() {
			return this._status;
		},

		set status( val ) {
			this._status = val;
			this.setTranslation();
			this.setClass();
		},

		get items() {
			return this._items;
		},

		set items( val ) {
			var items = val.map( function( element ) {
				return new Item( element );
			})
			items.sort( function ( element1, element2 ) {
				return element1.order_number - element2.order_number;
			});
			this._items = items;
		},

		setData: function ( data ) {
			angular.extend( this, data );
		},

		setTranslation:  function () {
			for ( var status in ORDER_STATUS ) {
				if ( this.status === ORDER_STATUS[ status ] ) {
					this.translation = ORDER_TRANSLATION[ status ];
				}
			}
		},

		setClass:  function () {
			for ( var status in ORDER_STATUS ) {
				if ( this.status === ORDER_STATUS[ status ] ) {
					this.class = ORDER_CLASS[ status ];
				}
			}
		},

		isStatus:  function ( status ) {
			if ( this.status === ORDER_STATUS[ status ] ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Order );
}]);

AngularModule.constant( 'ORDER_STATUS', {
	'OPEN': 0, //ok
	'CLOSED': 1, //ok
	'BLOCKED': 2,
	'CANCELLED': 3,
	'PENDING': 4, //ok
	'ACCEPTED': 5, //ok
	'REJECTED': 6,
	'DONE': 7,
});

AngularModule.constant( 'ORDER_TRANSLATION', {
	'OPEN': 'ABERTO',
	'CLOSED': 'FECHADO',
	'BLOCKED': 'BLOQUEADO',
	'CANCELLED': 'CANCELADO',
	'PENDING': 'PENDENTE',
	'ACCEPTED': 'ACEITO',
	'REJECTED': 'REJEITADO',
	'DONE': 'CONCLUÍDO'
});

AngularModule.constant( 'ORDER_CLASS', {
	'OPEN': 'order open',
	'CLOSED': 'order closed',
	'BLOCKED': 'order blocked',
	'CANCELLED': 'order cancelled',
	'PENDING': 'order pending',
	'ACCEPTED': 'order accepted',
	'REJECTED': 'order rejected',
	'DONE': 'order done'
});
