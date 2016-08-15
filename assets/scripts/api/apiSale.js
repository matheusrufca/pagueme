//Chamadas _rest/sale

function apiSaleFactory() {
	var self = {};


	self.getSaleList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/sale/sale_all',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	function create() {
		apiService.Sale = apiService.Sale || {};

		apiService.Sale = {
			getList: self.getSaleList
		}
	};

	create();

	return self;
};

apiSaleFactory();