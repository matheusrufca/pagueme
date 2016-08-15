//Chamadas _rest/user

function apiUserFactory() {
	var self = {};


	self.getUserList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/user/user_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createUser = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/user/user_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateUser = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/user/user_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeUser = function (user_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/user/user_delete',
			data: { id: user_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateUser = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateUser(dataObj, callback, errorCallback);
		}
		else {
			self.createUser(dataObj, callback, errorCallback);
		}
	};

	self.getUserProfileList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/user/user_profile_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService.User = apiService.User || {}

		apiService.User = {
			getList: self.getUserList,
			create: self.createUser,
			update: self.updateUser,
			remove: self.removeUser,
			upsert: self.createOrUpdateUser,
			getUserProfiles: self.getUserProfileList
		}
	};

	create();

	return self;
};

apiUserFactory();