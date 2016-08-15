AngularModule.factory( 'Cart', [ function() { 

	function Cart ( items ) {

		if ( items ) {
			this.setItems( items );
			this.setTotal();
		}

	};

	Cart.prototype = {

		setItems: function ( items ) {
			this.items = items;
		},

		addItem: function ( item ) {
			this.items.push( item );
		},

		setTotal: function () {

			var total = 0;

			if ( this.items ) {
				
				this.items.forEach( function ( item ) {
					total += item.quantity * item.price;
				});	
			}

			this.total = total;
		},

		asJSON: function () {
			return JSON.stringify( this );
		}

	};

	return( Cart );
}]);
