AngularModule.service( 'HandlerService', [ '$q', function( $q ) {

    return ({
        handleError: handleError,
        handleSuccess: handleSuccess
    });

    function handleError( response ) {
        if (! angular.isObject( response.data ) ||
            ! response.data.message ) {
            return ( $q.reject( "An unknown error occurred." ) );
        }
        return ( $q.reject( response.data.message ) );
    }

    function handleSuccess( response ) {
        return ( response.data );
    }

}]);
