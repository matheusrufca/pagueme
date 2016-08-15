//Chamadas _rest/pos

function apiPointOfSaleFactory() {
	var self = {};
	var sale = {};



	self.listPOS = function (callback, errorCallback) {
		return $.ajax({
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getPOS = function (data_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			data: { id: data_id },
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_read',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createPOS = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updatePOS = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removePOS = function (pos_id, callback, errorCallback) {
		var dataObj = { id: pos_id };

		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_delete?' + $.param(dataObj),
			//data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
	
	self.releasePOS = function (pos_id, callback, errorCallback) {
		var dataObj = { id: pos_id };
		
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/pos_release',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdatePOS = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updatePOS(dataObj, callback, errorCallback);
		} else {
			self.createPOS(dataObj, callback, errorCallback);
		}
	};




	self.listSales = function (data_id, callback, errorCallback) {
		return $.ajax({
			data: { id: data_id },
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.getSaleInfo = function (dataObj, callback, errorCallback) {
		return $.ajax({
			//method: 'POST',
			dataType: 'json',
			data: dataObj,
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_read',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.createSale = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			data: JSON.stringify(dataObj),
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_create',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.finishSale = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			data: JSON.stringify(dataObj),
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_finish',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.cancelSale = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			data: JSON.stringify(dataObj),
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_cancel',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.addSaleItem = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_item_add',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.updateSaleItem = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'POST',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_item_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	sale.removeSaleItem = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: 'DELETE',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_item_remove?' + $.param(dataObj),
			//url: apiServiceConfig.serviceUrl + '/_rest/pos/sale_session_item_remove',
			data: dataObj,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	function create() {
		apiService.POS = {
			getList: self.listPOS,
			get: self.getPOS,
			getDetail: self.getPOS,
			create: self.createPOS,
			update: self.updatePOS,
			upsert: self.createOrUpdatePOS,
			remove: self.removePOS,
			release: self.releasePOS
		};

		apiService.POS.Sale = {
			getList: sale.listSales,
			getDetail: sale.getSaleInfo,
			create: sale.createSale,
			finish: sale.finishSale,
			cancel: sale.cancelSale,
			addItem: sale.addSaleItem,
			updateItem: sale.updateSaleItem,
			removeItem: sale.removeSaleItem
		};
	};

	create();
};

apiPointOfSaleFactory();