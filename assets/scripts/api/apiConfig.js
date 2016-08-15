//Chamadas _rest/client

function apiConfigFactory() {
	var self = this;

	//Chamadas _rest/config/

	self.setOperationMode = function (dataObj, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/config/operation_mode',
			data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.setFiscalDevice = function (dataObj, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/config/fiscal_device',
			data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.setVerticalMarket = function (dataObj, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/config/vertical_market',
			data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService = apiService || {};

		apiService.Config = {
			setOperationMode: self.setOperationMode,
			setFiscalDevice: self.setFiscalDevice,
			setVerticalMarket: self.setVerticalMarket
		};
	};

	create();
};

apiConfigFactory();