AngularModule.factory( 'Item', [  'ITEM_STATUS', 'ITEM_TRANSLATION', 'ITEM_CLASS', 
	function( ITEM_STATUS, ITEM_TRANSLATION, ITEM_CLASS ) { 

	function Item ( data ) {

		if ( data ) {
			this.setData( data );
			this.updateImage();
			this.updateQuantity();
			this.updateDiscount();
			this.updateTotal();
			this.updateGrids();
		}

	};

	Item.prototype = {

		get quantity() {
			return this._quantity;
		},

		set quantity( val ) {
			this._quantity = val;
			this.updateTotal();
		},

		get price() {
			return this._price;
		},

		set price( val ) {
			this._price = val;
			this.updateTotal();
		},

		get discount() {
			return this._discount;
		},

		set discount( val ) {
			this._discount = val;
			this.updateTotal();
		},

		get status() {
			return this._status;
		},

		set status( val ) {
			this._status = val;
			this.setTranslation();
			this.setClass();
		},

		setData: function ( data ) {
			angular.extend( this, data );
		},

		updateImage: function () {
			this.image = 'http://retailpos.ddns.net:8080/' + this.image;
		},

		updateQuantity: function () {
			if ( this.quantity === undefined ) {
				this.quantity = 1;
			}			
		},

		decreaseQuantity: function () {
			if ( this.quantity > 1 ) {
				this.quantity--;
			}
		},

		increaseQuantity: function () {
			this.quantity++;
		},

		updateDiscount: function () {
			if ( this.discount === undefined ) {
				this.discount = 0;
			}
		},

		addPercentageDiscount: function ( percentage ) {
			if ( percentage === 0 ) {
				this.discount = 0;
			} else {
				var discount = ( percentage * this.base_price ) / 100;
				this.discount = parseFloat( discount.toFixed( 2 ) );
			}
		},

		isDiscountAdded: function () {
			if ( this.discount !== 0 ) {
				return true;
			}
			return false;
		},

		updateTotal: function () {
			this.total = this.quantity * ( this.price - this.discount );
		},

		updateGrids: function () {
			this.grid = undefined;
			this.grids = [
			{
				"id": 4,
				"name": "Tamanho",
				"values": [
					{
						"id": 12,
						"value": "PPP"
					},
					{
						"id": 13,
						"value": "M"
					},
					{
						"id": 14,
						"value": "G"
					}
				]
			},
			{
				"id": 5,
				"name": "Cor",
				"values": [
					{
						"id": 16,
						"value": "grid-class bg-red"
					},
					{
						"id": 17,
						"value": "grid-class bg-grey"
					}
				]
			}];
		},
		
		setTranslation:  function () {
			for ( var status in ITEM_STATUS ) {
				if ( this.status === ITEM_STATUS[ status ] ) {
					this.translation = ITEM_TRANSLATION[ status ];
				}
			}
		},

		setClass:  function () {
			for ( var status in ITEM_STATUS ) {
				if ( this.status === ITEM_STATUS[ status ] ) {
					this.class = ITEM_CLASS[ status ];
				}
			}
		},

		isStatus:  function ( status ) {
			if ( this.status === ITEM_STATUS[ status ] ) {
				return true;
			}
			return false;
		},

		isGridValueClass: function ( value ) {
			
			if ( value.indexOf( 'grid-class' ) > -1 ) {
				return true;
			}
			return false;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	/*
	Object.defineProperty( Item.prototype, 'quantity', {
		get: function() {
			return this._quantity;
		},
		set: function( val ) {
			this._quantity = val;
			this.updateTotal();
		}
	});

	Object.defineProperty( Item.prototype, 'price', {
		get: function() {
			return this._price;
		},
		set: function( val ) {
			this._price = val;
			this.updateTotal();
		}
	});

	Object.defineProperty( Item.prototype, 'discount', {
		get: function() {
			return this._discount;
		},
		set: function( val ) {
			this._discount = val;
			this.updateTotal();
		}
	});
	*/

	return( Item );
}]);

AngularModule.constant( 'ITEM_STATUS', {
	'PENDING': 0,
	'ACCEPTED': 1,
	'BLOCKED': 2,
	'CANCELLED': 3,
	'DONE': 4,
	'MAKING': 5
});

AngularModule.constant( 'ITEM_TRANSLATION', {
	'PENDING': 'PENDENTE',
	'ACCEPTED': 'ACEITO',
	'BLOCKED': 'BLOQUEADO',
	'CANCELLED': 'CANCELADO',
	'DONE': 'CONCLUÍDO',
	'MAKING': 'PREPARANDO'
});

AngularModule.constant( 'ITEM_CLASS', {
	'PENDING': 'item pending',
	'ACCEPTED': 'item accepted',
	'BLOCKED': 'item blocked',
	'CANCELLED': 'item cancelled',
	'DONE': 'item done',
	'MAKING': 'item making'
});
