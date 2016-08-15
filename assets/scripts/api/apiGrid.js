//Chamadas _rest/grid

function apiGrid() {
	var self = {};

	//Chamadas _rest/grid

	self.getGridList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.createGrid = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.updateGrid = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.deleteGrid = function (grid_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_delete?id=' + grid_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.createOrUpdateGrid = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateGrid(dataObj, callback, errorCallback);
		}
		else {
			self.createGrid(dataObj, callback, errorCallback);
		}
	};

	self.listGridProperty = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_property_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.createGridProperty = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_property_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.updateGridProperty = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_property_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.deleteGridProperty = function (grid_property_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_property_delete?id=' + grid_property_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.createOrUpdateGridProperty = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateGridProperty(dataObj, callback, errorCallback);
		}
		else {
			self.createGridProperty(dataObj, callback, errorCallback);
		}
	};

	self.addGridEntry = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_entry_add',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	self.deleteGridEntry = function (grid_entry_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/grid/grid_entry_delete?id=' + grid_entry_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback
		});
	};

	function create() {
		apiService = apiService || {};

		apiService.Grid = {
			getList: self.getGridList,
			create: self.createGrid,
			update: self.updateGrid,
			remove: self.deleteGrid,
			upsert: self.createOrUpdateGrid
		};

		apiService.GridProperty = {
			getList: self.listGridProperty,
			create: self.createGridProperty,
			update: self.updateGridProperty,
			remove: self.deleteGridProperty,
			upsert: self.createOrUpdateGridProperty
		};

		apiService.GridEntry = {
			create: self.addGridEntry,
			remove: self.deleteGridEntry
		};
	};

	create();
};

apiGrid();