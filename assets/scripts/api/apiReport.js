//Chamadas _rest/report

function apiReport() {
	var self = {};

	self.getWaiterComission = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/restaurant/per_waiter_commission',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getBestsellers = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/sales/bestseller',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	self.getSalesHistory= function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/sales/history',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getSalesHistoryByHour = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/sales/history_by_hour',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getProductSales = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/sales/bestseller',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getBestsellerCategories = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/sales/bestseller_by_category',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getTillHistory = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/till/history',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getTillBalance= function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/till/balance',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getCancelledOrders = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/restaurant/order_cancelled',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	self.getDiscountOrders = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			//data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/report/restaurant/order_discount',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService.Report = {
			getWaiterCommission: self.getWaiterComission,
			getDiscountOrders: self.getDiscountOrders,
			getTillHistory: self.getTillHistory,
			getTillBalance: self.getTillBalance
		};

		apiService.Report.Sales = {
			getSalesHistory: self.getSalesHistory,
			getProductSales: self.getProductSales,
			getBestsellers: self.getBestsellers,
			getSalesHistoryByHour: self.getSalesHistoryByHour,
			getBestsellerCategories: self.getBestsellerCategories,
			getCancelledOrders: self.getCancelledOrders
		};

		apiService.Report.Restaurant = {
			getCancelledOrders: self.getCancelledOrders
		};

		apiService.Report
	};

	create();

	return self;
};

apiReport();