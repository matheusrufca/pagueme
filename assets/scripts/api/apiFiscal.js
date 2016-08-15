function apiFiscal() {
	var self = {};

	//Chamadas _rest/fiscal/
   
    
	self.getSaleList= function (params, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sale_list?' + params,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.saleCancel = function (sale_id, callback, errorCallback) {
		return $.ajax({
			method: "GET",            
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sale_cancel?sale_id='+sale_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.salePrint = function (sale_id, operation, callback, errorCallback) {
		return $.ajax({
			method: "GET",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/fiscal/sale_print?sale_id='+sale_id+'&operation='+operation,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService = apiService || {};

		apiService.Fiscal = {
			getList: self.getSaleList,
			cancel: self.saleCancel,
			print: self.salePrint
		};
	};

	create();
};

apiFiscal();