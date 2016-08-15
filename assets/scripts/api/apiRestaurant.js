//Chamadas _rest/restaurant

function apiRestaurant() {
	var self = {};


	self.createOrder = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.cancelOrder = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_cancel',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.addOrderItem = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_add_items',
			data: {
				code: product_code,
				quantity: quantity
			},
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeOrderItem = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_remove_items',
			data: { id: product_code },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.finishOrder = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_finish',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	

	self.getOrderHistory= function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_history',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getOrderDetail = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			url: apiServiceConfig.serviceUrl + '/_rest/restaurant/order_details',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
	


	function create() {
		apiService.Order = {
			create: self.createOrder,
			finish: self.finishOrder,
			cancel: self.cancelOrder,
			addItem: self.addOrderItem,
			removeItem: self.removeOrderItem,
			getHistory: self.getOrderHistory,
			getDetail: self.getOrderDetail
		};
	};

	create();

	return self;
};

apiRestaurant();