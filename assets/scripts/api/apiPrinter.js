//Chamadas _rest/branch

function apiPrinterFactory() {
	var self = {};
    
	//Chamadas _rest/system/nf_printer
	self.checkPrinter = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url:apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_check',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createPrinter = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url:apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_add',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updatePrinter = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url:apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_edit',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removePrinter = function (printer_id, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url:apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_remove',
			//data: { printer: { id: printer_id } },
			data: JSON.stringify({ printer: { id: printer_id } }),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdatePrinter = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.printer.id || dataObj.printer.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updatePrinter(dataObj, callback, errorCallback);
		}
		else {
			self.createPrinter(dataObj, callback, errorCallback);
		}
	};


	function create() {
		apiService = apiService || {};
		//apiService.System = apiService.System || {};

		apiService.Printer = {
			getList: self.checkPrinter,
			create: self.createPrinter,
			update: self.updatePrinter,
			remove: self.removePrinter,
			upsert: self.createOrUpdatePrinter
		}
	};

	create();

	return self;
};

apiPrinterFactory();