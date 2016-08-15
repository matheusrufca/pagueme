AngularModule.service( 'NotificationService', [ 'toastr', function( toastr ) {

	return ({
		notifyResponse: notifyResponse,
		notifySuccess: notifySuccess,
		notifyInfo: notifyInfo,
		notifyWarning: notifyWarning,
		notifyError: notifyError
	});

	function notifyResponse ( status, message, mustNotify, mustLog ) {

		if ( message === undefined ) {
			return;
		}

		if ( mustLog ) {
			logMessage( message );
		}

		if ( isResponseStatusSuccessful( status ) ) {
			if ( mustNotify ) {
				notifySuccess( message );
			}
		} else {
			notifyWarning( message );
		}
	}

	function notifySuccess ( message ) {

		toastr.success( message );
	}

	function notifyInfo ( message ) {

		toastr.info( message );
	}

	function notifyWarning ( message ) {

		toastr.warning( message );
	}

	function notifyError ( message, mustLog ) {

		if ( message === undefined ) {
			return;
		}

		if ( mustLog ) {
			logMessage( message );
		}

		toastr.error( message );
	}

	function logMessage ( message ) {

		console.log( message );
	}

	function isResponseStatusSuccessful ( status ) {

		if ( status === 0 ) {
			return true;
		}
		return false;
	}

}]);
