//Chamadas _rest/employee

function apiEmployeeFactory() {
	var self = {};


	self.getEmployeeStatusList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_status_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getEmployeeList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getEmployee = function (employee_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_read?id=' + employee_id,
			//data: employee_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createEmployee = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateEmployee = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeEmployee = function (employee_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/employee_delete?id=' + employee_id,
			//data: { id: employee_id },
			//data: employee_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateEmployee = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateEmployee(dataObj, callback, errorCallback);
		}
		else {
			self.createEmployee(dataObj, callback, errorCallback);
		}
	};



	//Employee Role

	self.getEmployeeRoleList = function (callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/role_list',
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.getEmployeeRole = function (employeeRole_id, callback, errorCallback) {
		return $.ajax({
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/role_read',
			data: { id: employeeRole_id },
			//data: employeeRole_id,
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createEmployeeRole = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			//contentType: 'application/json',
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/role_create',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.updateEmployeeRole = function (dataObj, callback, errorCallback) {
		return $.ajax({
			method: "POST",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/role_update',
			data: JSON.stringify(dataObj),
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.removeEmployeeRole = function (employeeRole_id, callback, errorCallback) {
		return $.ajax({
			method: "DELETE",
			dataType: 'json',
			url: apiServiceConfig.serviceUrl + '/_rest/employee/role_delete?id=' + employeeRole_id,
			//data: { id: employeeRole_id },
			success: apiServiceConfig.wrapperCallback(callback, errorCallback),
			error: apiServiceConfig.wrapperErrorCallback(errorCallback)
		});
	};

	self.createOrUpdateEmployeeRole = function (dataObj, callback, errorCallback) {
		function isEditing() {
			if (!dataObj.id || dataObj.id == "") {
				return false;
			}
			return true;
		};

		if (isEditing()) {
			self.updateEmployeeRole(dataObj, callback, errorCallback);
		}
		else {
			self.createEmployeeRole(dataObj, callback, errorCallback);
		}
	};




	function create() {
		apiService.Employee = apiService.Employee || {}

		apiService.Employee = {
			getList: self.getEmployeeList,
			getStatusList: self.getEmployeeStatusList,
			get: self.getEmployee,
			create: self.createEmployee,
			update: self.updateEmployee,
			remove: self.removeEmployee,
			upsert: self.createOrUpdateEmployee,
		};

		apiService.Employee.Role = {
			getList: self.getEmployeeRoleList,
			get: self.getEmployeeRole,
			create: self.createEmployeeRole,
			update: self.updateEmployeeRole,
			remove: self.removeEmployeeRole,
			upsert: self.createOrUpdateEmployeeRole,
		};
	};

	create();
};

apiEmployeeFactory();