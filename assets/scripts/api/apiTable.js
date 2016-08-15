//Chamadas _rest/table

function apiTableFactory() {
	var self = {};


	self.getTableList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/table_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createTable = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateTable = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeTable = function (table_id, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_delete',
			data: JSON.stringify({ table_id: table_id }),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateTable = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateTable(dataObj, callback, errorCallback);
		}
		else {
			self.createTable(dataObj, callback, errorCallback);
		}
	};



	self.getAreaList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_list_area',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getAreaListFull = function (tableArea_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			data: { area_id: tableArea_id },
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_list_area_full',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.setArea = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/set_table_area',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createArea = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_create_area',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateArea = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_update_area',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeArea = function (tableArea_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/table/table_delete_area',
			data: { id: tableArea_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateArea = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateArea(dataObj, callback, errorCallback);
		}
		else {
			self.createArea(dataObj, callback, errorCallback);
		}
	};


	function create() {
		apiService.Table = apiService.Table || {}

		apiService.Table = {
			getList: self.getTableList,
			get: self.getTable,
			create: self.createTable,
			update: self.updateTable,
			remove: self.removeTable,
			upsert: self.createOrUpdateTable
		};

		apiService.Table.Area = {
			getList: self.getAreaList,
			get: self.getAreaListFull,
			create: self.createTable,
			update: self.createArea,
			remove: self.removeArea,
			upsert: self.createOrUpdateArea
		};
	};

	create();

	return self;
};

apiTableFactory();