//Chamadas _rest/client

function apiSystemFactory() {
	var self = {};


	//_rest/system/network

	//retorna configurações da rede e ifaces
	self.checkNetwork = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/network_check',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//seta configurações da rede
	self.configNetwork = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/network_config',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	//_rest/system/nf_printer
	self.checkPrinter = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_check',
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
			url: apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_add',
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
			url: apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_edit',
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
			url: apiServiceConfig.serviceUrl + '/_rest/system/nf_printer_remove',
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


	//_rest/system/list_devices 
	self.listDevices = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/list_devices',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	//_rest/system/fiscal_printer
	self.getFiscalPrintersStatus = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/fiscal_printer_status',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getFiscalPrintersConfigs = function (callback, errorCallback) {
		return $.ajax({
			method: "GET",
			//contentType: 'application/json',
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/fiscal_printer_configs',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createFiscalPrinter = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/fiscal_printer_add',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	//_rest/system/retail_update_install
	self.installRetailUpdate = function (item_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/retail_update_install',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback),
			data: { id: item_id }
		});
	};

	//_rest/system/force_retail_verify_update
	self.verifyRetailUpdate = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/force_retail_verify_update',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/retail_update_list
	self.listRetailUpdate = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/retail_update_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/retail_update_current_version
	self.getRetailUpdateVersion = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/retail_update_current_version',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};


	//_rest/system/system_log
	self.getSystemLog = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/system_log',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/license_check
	self.checkLicense = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			//url: 'http://ip.jsontest.com/',
			url: apiServiceConfig.serviceUrl + '/_rest/system/license_check',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/license_update
	self.updateLicense = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/license_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/sytem_reboot
	self.rebootSystem = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/system_reboot',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/wizard_read
	self.getWizardStep = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/wizard_read',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/wizard_update
	self.updateWizardStep = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			data: JSON.stringify(dataObj),
			url: apiServiceConfig.serviceUrl + '/_rest/system/wizard_update',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	//_rest/system/wizard_clean
	self.resetWizard = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/wizard_clean',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};
    
    //_rest/system/system_log
	self.getWifiList = function (iface, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/system/wifi_list?iface=' + iface,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	function create() {
		apiService = apiService || {};

		apiService.System = {
			Network: {
				check: self.checkNetwork,
				config: self.configNetwork,
                wifiList: self.getWifiList
			},
			Printer: {
				getList: self.checkPrinter,
				getDevices: self.listDevices,
				create: self.createPrinter,
				update: self.updatePrinter,
				remove: self.removePrinter,
				upsert: self.createOrUpdatePrinter,
			},
			Device: {
				getList: self.listDevices
			},
			FiscalPrinter: {
				getStatus: self.getFiscalPrintersStatus,
				getConfigs: self.getFiscalPrintersConfigs,
				create: self.createFiscalPrinter
			},
			License: {
				getSystemLog: self.getSystemLog,
				checkLicense: self.checkLicense,
				updateLicense: self.updateLicense
			},
			Wizard: {
				getStep: self.getWizardStep,
				updateStep: self.updateWizardStep,
				reset: self.resetWizard
			},
			RetailUpdate: {
				getList: self.listRetailUpdate,
				verify: self.verifyRetailUpdate,
				install: self.installRetailUpdate,
				getVersion: self.getRetailUpdateVersion
			},
			reboot: self.rebootSystem

		};
	};

	create();

	return self;
};

apiSystemFactory();