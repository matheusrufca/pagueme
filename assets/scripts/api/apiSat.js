//Chamadas _rest/sat

function apiSat() {
	var self = {};

	//Chamadas _rest/sat

	self.getSatList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSat = function (data_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_read',
			data: { id: data_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createSat = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateSat = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeSat = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateSat = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateSat(dataObj, callback, errorCallback);
		}
		else {
			self.createSat(dataObj, callback, errorCallback);
		}
	};

	self.getSatStatus = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/operational_status?' + $.param(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSatStatusList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/operational_status_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSatEndToEndTest = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/end_to_end_test?' + $.param(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getQuery = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/sat_query?' + $.param(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSatLog = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/extract_logs?' + $.param(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateNetwork = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/configure_network',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getExtractionList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/coupon_extraction_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.extractCupons = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/extract_coupons',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSupportedSatList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sat/supported_sat_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService = apiService || {};

		apiService.Sat = {
			getList: self.getSatList,
			get: self.getSat,
			create: self.createSat,
			update: self.updateSat,
			remove: self.removeSat,
			upsert: self.createOrUpdateSat,
			status: self.getSatStatus,
			statusList: self.getSatStatusList,
			endToEndTest: self.getSatEndToEndTest,
			query: self.getQuery,
			log: self.getSatLog,
			updateNetwork: self.updateNetwork,
			supportedList: self.getSupportedSatList,
			Cupons: {
				getExtractionList: self.getExtractionList,
				extract: self.extractCupons
			}
		};
	};

	create();
};

apiSat();