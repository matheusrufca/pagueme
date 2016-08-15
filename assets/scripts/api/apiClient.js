//Chamadas _rest/client

function apiClientFactory(serviceUrl) {
	var self = {};
	//var apiServiceConfig = apiServiceConfig(serviceUrl, null);


	self.getClientList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/client/client_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getClient = function (client_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/client/client_full',
			data: { id: client_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createClient = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/client/client_add',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateClient = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/client/client_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeClient = function (client_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/client/client_remove',
			data: { id: client_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateClient = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateClient(dataObj, callback, errorCallback);
		}
		else {
			self.createClient(dataObj, callback, errorCallback);
		}
	};

	

	function create() {
		apiService.Client = {
			getList: self.getClientList,
			get: self.getClient,
			create: self.createClient,
			update: self.updateClient,
			remove: self.removeClient,
			upsert: self.createOrUpdateClient,
		};
	};

	create();

	return self;
};

apiClientFactory();