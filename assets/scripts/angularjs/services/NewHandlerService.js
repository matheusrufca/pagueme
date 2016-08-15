AngularModule.service( 'NewHandlerService', [ '$q', function( $q ) {

	return ({
		handleError: handleError,
		handleSuccess: handleSuccess
	});

	function handleError( response ) {

		if ( ! angular.isObject( response.data ) ||
			! response.data.message ) {
			return ( $q.reject( 'Um erro de conexão desconhecido ocorreu.' ) );
		}
		return ( $q.reject( response.data.message ) );
	}

	function handleSuccess( response ) {

		if ( isResponseStatusSuccessful( response.data.status ) ) {	
			return createSuccessObject( response );
		} else {
			return createWarningObject( response );
		}
	}

	function createSuccessObject ( response ) {

		var successObject = {
			status: response.data.status,
			message: response.data.message,
			data: response.data.data
		};

		return successObject;
	}

	function createWarningObject ( response ) {

		var warningObject = {
			status: response.data.status,
			message: response.data.message,
			data: new Object()
		};

		return warningObject;
	}

	function isResponseStatusSuccessful ( status ) {

		if ( status === 0 ) {
			return true;
		}
		return false;
	}

}]);
