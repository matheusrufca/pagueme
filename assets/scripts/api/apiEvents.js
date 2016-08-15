//Chamadas _rest/event

function apiEventFactory() {
	var self = {};


	self.getEventList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/event/event_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService.Event = apiService.Event || {}

		apiService.Event = {
			getList: self.getEventList
		};
	};

	create();

	return self;
};

apiEventFactory();