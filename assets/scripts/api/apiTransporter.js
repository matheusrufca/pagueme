//Chamadas _rest/transporter

function apiTransporterFactory() {
	var self = {};


	self.getTransporterList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/transporter/transporter_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	function create() {
		apiService.Transporter = apiService.Transporter || {}

		apiService.Transporter = {
			getList: self.getTransporterList
		}
	};

	create();

	return self;
};

apiTransporterFactory();