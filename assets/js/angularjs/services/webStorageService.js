AngularModule.service( 'WebStorageService' , [ function() {

	return({
		getLocalStorageItem: getLocalStorageItem,
		setLocalStorageItem: setLocalStorageItem,
		removeLocalStorageItem: removeLocalStorageItem,
		isSetLocalStorageItem: isSetLocalStorageItem
	});

	function getLocalStorageItem ( key ) {

		var data = localStorage.getItem( key );

		if ( ! data ) { 
			return null; 
		} else {
			if ( isJsonString( data ) ) {
				return JSON.parse( data );
			} else {
				return data;
			}			
		}
	}

	function setLocalStorageItem ( key, data ) {

		if ( typeof data === 'object' ) {
			localStorage.setItem( key, JSON.stringify( data ) );
		} else {
			localStorage.setItem( key, data );
		}
	}

	function removeLocalStorageItem ( key ) {

		var data = localStorage.getItem( key );

		if ( ! data ) { 
			return null; 
		} else {
			localStorage.removeItem( key ); 
		}
	}

	function isSetLocalStorageItem ( key ) {

		var data = localStorage.getItem( key );

		if ( ! data ) { 
			return false; 
		} else {
			return true
		}
	}

	function isJsonString ( str ) {

		try {
			JSON.parse( str );
		} catch ( error ) {
			return false;
		}
		return true;
	}

}]);
