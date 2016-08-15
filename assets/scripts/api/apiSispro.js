//Chamadas _rest/sispro

function apiSispro() {
	var self = {};

	//Chamadas _rest/sispro

	self.getSispro = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_conf_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
    self.createOrUpdateSispro = function (dataObj, callback, errorCallback) {
        function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateSispro(dataObj, callback, errorCallback);
		}
		else {
			self.createSispro(dataObj, callback, errorCallback);
		}
    }

	self.createSispro = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_conf_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateSispro = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_conf_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeSispro = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_conf_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
    self.getSisproStatus = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_get_status',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
    self.forceUpdateSispro = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sispro/sispro_force_update',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
	function create() {
		apiService = apiService || {};

		apiService.Sispro = {
			get: self.getSispro,
			create: self.createSispro,
			update: self.updateSispro,
			remove: self.removeSispro,
			upsert: self.createOrUpdateSispro,
            status: self.getSisproStatus,
            forceUpdate: self.forceUpdateSispro
		};
	};

	create();
};

apiSispro();