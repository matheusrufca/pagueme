//Chamadas _rest/payment

function apiPaymentFactory() {
	var self = {};


	self.getPaymentMethodsList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/method_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getPaymentMethod = function (paymentMethod_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/method_read',
			data: { id: paymentMethod_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createPaymentMethod = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/method_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updatePaymentMethod = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/method_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removePaymentMethod = function (paymentMethod_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/method_delete',
			data: { id: paymentMethod_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdatePaymentMethod = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updatePaymentMethod(dataObj, callback, errorCallback);
		}
		else {
			self.createPaymentMethod(dataObj, callback, errorCallback);
		}
	};


	self.getPaymentPinpadList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/pinpad_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getPaymentPinpad = function (device_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/pinpad_read',
			data: { id: device_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createPaymentPinpad = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/pinpad_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updatePaymentPinpad = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/pinpad_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removePaymentPinpad = function (device_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/payment/pinpad_delete?id=' + device_id,
			//data: { id: device_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdatePaymentPinpad = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updatePaymentPinpad(dataObj, callback, errorCallback);
		}
		else {
			self.createPaymentPinpad(dataObj, callback, errorCallback);
		}
	};

	function create() {
		apiService = apiService || {};

		apiService.Payment = {
			Method: {
				getList: self.getPaymentMethodsList,
				get: self.getPaymentMethod,
				create: self.createPaymentMethod,
				update: self.updatePaymentMethod,
				remove: self.removePaymentMethod,
				upsert: self.createOrUpdatePaymentMethod
			},
			Pinpad: {
				getList: self.getPaymentPinpadList,
				get: self.getPaymentPinpad,
				create: self.createPaymentPinpad,
				update: self.updatePaymentPinpad,
				remove: self.removePaymentPinpad,
				upsert: self.createOrUpdatePaymentPinpad
			}
		}
	};

	create();
};

apiPaymentFactory();