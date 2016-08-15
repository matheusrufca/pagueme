AngularModule.service( 'ItemService', [ '$q', '$filter', 'Item', 'ItemApi', 'NotificationService',
	function( $q, $filter, Item, ItemApi, NotificationService ) {

	var _this = this;

	return({
		listItems: listItems,
		setItems: setItems,
		getItems: getItems,
		filterItems: filterItems,
		listCategories: listCategories,
		setCategories: setCategories,
		getCategories: getCategories,
		isPossibleDecreaseQuantity: isPossibleDecreaseQuantity
	});
	
	var items;
	var categories;

	function setItems ( items ) {

		_this.items = [];

		items.forEach( function( itemIterated, indexIterated ) {
			_this.items[ indexIterated ] = new Item( itemIterated );
		});
	}

	function getItems () {

		return _this.items;
	}

	function setCategories ( categories ) {

		_this.categories = categories;
	}

	function getCategories () {

		return _this.categories;
	}

	function listItems () {

		return ItemApi.listItems()
		.then( function( response ) {
			setItems( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function filterItems ( selected ) {

		return $filter( 'itemFilter' )( _this.items, selected )
	}

	function listCategories () {

		return ItemApi.listCategories()
		.then( function( response ) {
			setCategories( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function isPossibleDecreaseQuantity ( item ) {

		if ( item ) {
			if ( item.quantity > 1 ) {
				return true;
			} 
		}
		return false;
	}

}]);
