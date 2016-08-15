//Chamadas _rest/tax

function apiTax() {
	var self = {};

	//Chamadas _rest/tax

	self.getTaxList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/tax/tax_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getTax = function (dataObj, callback, errorCallback) {
		return $.ajax({
            method: 'GET',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/tax/tax_read',
			data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createTax = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/tax/tax_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateTax = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/tax/tax_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeTax = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/tax/tax_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateTax = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateTax(dataObj, callback, errorCallback);
		}
		else {
			self.createTax(dataObj, callback, errorCallback);
		}
	};


	function create() {
		apiService = apiService || {};

		apiService.Tax = {
			getList: self.getTaxList,
			get: self.getTax,
			create: self.createTax,
			update: self.updateTax,
			remove: self.removeTax,
			upsert: self.createOrUpdateTax
		};
	};

	create();
};

apiTax();