//Chamadas _rest/server_link

function apiServerLink() {
	var self = {};

	//Chamadas _rest/server_link

	self.getServerLinkList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getServerLink = function (data_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_read',
			data: { id: data_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createServerLink = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateServerLink = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeServerLink = function (data_id, callback, errorCallback) {
		var dataObj = { id: data_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.verifyServerLinkStatus = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/update_server_link/server_link_status',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};





	self.createOrUpdateServerLink = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateServerLink(dataObj, callback, errorCallback);
		}
		else {
			self.createServerLink(dataObj, callback, errorCallback);
		}
	};


	function create() {
		apiService = apiService || {};

		apiService.ServerLink = {
			getList: self.getServerLinkList,
			get: self.getServerLink,
			create: self.createServerLink,
			update: self.updateServerLink,
			remove: self.removeServerLink,
			upsert: self.createOrUpdateServerLink,
			verify: self.verifyServerLinkStatus,
		};
	};

	create();
};

apiServerLink();