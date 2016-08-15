//Chamadas _rest/device

function apiDeviceFactory() {
	var self = {};

	self.getDeviceList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/device/station_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	function create() {
		apiService.Device = {
			getList: self.getDeviceList
		};
	};

	create();

	return self;
};

apiDeviceFactory();