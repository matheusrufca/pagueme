//Chamadas _rest/nfce

function apiNfce() {
	var self = {};

	//Chamadas _rest/nfce

	self.getNfceList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/nfce_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getNfce = function (data_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/nfce_read',
			data: { id: data_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createNfce = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/nfce_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateNfce = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/nfce_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeNfce = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/nfce_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateNfce = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateNfce(dataObj, callback, errorCallback);
		}
		else {
			self.createNfce(dataObj, callback, errorCallback);
		}
	};
    
    self.getNfceStatus = function (data_id, callback, errorCallback) {
        var dataObj = { id: data_id };
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/nfce/webservice_status?' + $.param(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
	function create() {
		apiService = apiService || {};

		apiService.Nfce = {
			getList: self.getNfceList,
			get: self.getNfce,
			create: self.createNfce,
			update: self.updateNfce,
			remove: self.removeNfce,
			upsert: self.createOrUpdateNfce,
            status: self.getNfceStatus
		};
	};

	create();
};

apiNfce();