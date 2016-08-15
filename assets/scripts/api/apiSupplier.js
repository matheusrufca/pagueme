//Chamadas _rest/supplier

function apiSupplierFactory() {
	var self = {};


	self.getSupplierList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/supplier/supplier_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	function create() {
		apiService.Supplier = {
			getList: self.getSupplierList
		}
	};

	create();

	return self;
};

apiSupplierFactory();