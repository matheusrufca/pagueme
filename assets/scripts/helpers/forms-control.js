//Helper para funções de manipulação de formulários
window.FormsControl = (function () {
	var _this = this, self = {};


	var formFields = {};

	function fieldControl(oldValue) {
		var defaultFieldValue = undefined;

		var self = {
			isChanged: false,
			oldValue: oldValue,
			newValue: defaultFieldValue
		};

		self.setNewValue = function (newValue) {
			self.isChanged = hasValueChanged(newValue, oldValue);
			self.newValue = newValue;

			return newValue;
		};


		function hasValueChanged(newValue, oldValue) {
			var output = false;

			if ((typeof newValue === "boolean") && (newValue != oldValue)) {
				output = true;
			} else if ((oldValue == "" || newValue == "") && (newValue != oldValue)) {
				output = true;
			} else if ((newValue && oldValue) && (newValue != oldValue)) {
				output = true;
			}

			return output;
		};


		return self;
	};


	self.loadFormControl = function (form, formData) {
		var formId;

		if (!form) { throw 'Invalid form id.' }


		if (typeof form == 'string') { formId = form; }
		else if (form instanceof jQuery) { formId = ['#', form.attr('id')].join(''); }


		if (formData) {
			_mapFormData(formData);
		}


		/* input event */
		$(formId).find('input, select, textarea').on("change", _onFieldChange);

		$('[form="' + formId.substring(1) + '"]').on("change", _onFieldChange);

		/* bootstrap-switch event (checkbox) */
		$(formId).find('input[type="checkbox"]').on('switchChange.bootstrapSwitch', _onCheckboxChange);
	};


	self.getFormChanges = function () {
		var changedFormData = {};


		$.each(_this.formFields, function (key, value) {
			if (key === 'id') { //|| key.search("_id") != -1
				changedFormData[key] = _this.formFields[key].oldValue;
			}

			if (_isFieldChanged(key)) {
				changedFormData[key] = _this.formFields[key].newValue;
			}
		});

		return changedFormData;
	};

	// seta value null em propriedades que necessitam para serem atualizadas
	self.changedProperties = function (oldForm, newForm) {
		var target = {};
		self.changedPropertiesRec(oldForm, newForm, target);
		return target;
	}

	self.changedPropertiesRec = function (obj, obj2, target) {
		for (var i in obj) {
			if (typeof obj[i] === 'object') {
				target[i] = {};
				self.changedPropertiesRec(obj[i], obj2[i], target[i]);
			} else {
				if (obj[i].toString() != obj2[i].toString()) {
					target[i] = obj2[i];
				}
			}
		}
	};


	self.isChanged = function () {
		var changedData = self.getFormChanges();

		return Object.keys(changedData);
	};


	function _onFieldChange(event) {
		var currentElement, fieldName, newValue, oldValue;

		currentElement = $(event.currentTarget);

		fieldName = event.currentTarget.id;
		newValue = $(event.currentTarget).val();
		oldValue = _getOldFieldValue(fieldName);

		_setNewFieldValue(fieldName, newValue);
	};

	function _onCheckboxChange(event, state) {
		var currentElement, fieldName, newValue, oldValue;


		currentElement = $(event.currentTarget);

		fieldName = event.currentTarget.id;
		newValue = state;
		oldValue = _getOldFieldValue(fieldName);

		_setNewFieldValue(fieldName, newValue);


	};

	function _mapFormData(formData) {
		_this.formFields = {};
		$.each(formData || {}, function (key, value) {
			_this.formFields[key] = fieldControl(value);
		});
	};




	function _getOldFieldValue(fieldName) {
		if (!_hasField(fieldName)) { return; }

		return _this.formFields[fieldName].oldValue;
	};

	function _setNewFieldValue(fieldName, newValue) {
		if (!_hasField(fieldName)) { return; }

		return _this.formFields[fieldName].setNewValue(newValue);
	};

	function _getField(fieldName) {
		if (!_hasField(fieldName)) { return; }

		return _this.formFields[fieldName];
	};

	function _isFieldChanged(fieldName) {
		if (!_hasField(fieldName)) { return; }

		return _this.formFields[fieldName].isChanged;
	};



	function _hasField(fieldName) {
		var output = false;

		if (fieldName in _this.formFields) {
			output = true;
		}
		else {
			var msg = [fieldName, ' - FormsControl: Field not mapped.'].join('');
			console.warn(msg);
		}

		return output;
	};


	return self;
})();

window.FormsControlV2 = (function () {
	 function FormControl() {
	 	var self = {};
	 	var _this = this, self = {};

	 	_this.formFields = {};


		self.loadFormControl = function (form, formData) {
			var formId;

			if (!form) { throw 'Invalid form id.' }


			if (typeof form == 'string') { formId = form; }
			else if (form instanceof jQuery) { formId = ['#', form.attr('id')].join(''); }


			if (formData) {
				_mapFormData(formData);
			}


			/* input event */
			$(formId).find('input, select, textarea').on("change", _onFieldChange);

			$('[form="' + formId.substring(1) + '"]').on("change", _onFieldChange);

			/* bootstrap-switch event (checkbox) */
			$(formId).find('input[type="checkbox"]').on('switchChange.bootstrapSwitch', _onCheckboxChange);
		};

		self.getFormChanges = function () {
			var changedFormData = {};


			$.each(_this.formFields, function (key, value) {
				if (key === 'id') { //|| key.search("_id") != -1
					changedFormData[key] = _this.formFields[key].oldValue;
				}

				if (_isFieldChanged(key)) {
					changedFormData[key] = _this.formFields[key].newValue;
				}
			});

			return changedFormData;
		};

		self.isChanged = function () {
			var changedData = self.getFormChanges();

			return Object.keys(changedData);
		};


		function fieldControl(oldValue) {
			var defaultFieldValue;

			var self = {
				isChanged: false,
				oldValue: oldValue,
				newValue: defaultFieldValue
			};

			self.setNewValue = function (newValue) {
				self.isChanged = hasValueChanged(newValue, oldValue);
				self.newValue = newValue;

				return newValue;
			};


			function hasValueChanged(newValue, oldValue) {
				var output = false;

				if ((typeof newValue === "boolean") && (newValue != oldValue)) {
					output = true;
				} else if ((oldValue == "" || newValue == "") && (newValue != oldValue)) {
					output = true;
				} else if ((newValue && oldValue) && (newValue != oldValue)) {
					output = true;
				}

				return output;
			};

			return self;
		};

		function _onFieldChange(event) {
			var currentElement, fieldName, newValue, oldValue;

			currentElement = $(event.currentTarget);

			fieldName = event.currentTarget.id;
			newValue = $(event.currentTarget).val();
			oldValue = _getOldFieldValue(fieldName);

			_setNewFieldValue(fieldName, newValue);
		};

		function _onCheckboxChange(event, state) {
			var currentElement, fieldName, newValue, oldValue;

			currentElement = $(event.currentTarget);

			fieldName = event.currentTarget.id;
			newValue = state;
			oldValue = _getOldFieldValue(fieldName);

			_setNewFieldValue(fieldName, newValue);
		};

		function _mapFormData(formData) {
			_this.formFields = {};
			$.each(formData || {}, function (key, value) {
				_this.formFields[key] = fieldControl(value);
			})

		};


		function _getOldFieldValue(fieldName) {
			if (!_hasField(fieldName)) { return; }

			return _this.formFields[fieldName].oldValue;
		};

		function _setNewFieldValue(fieldName, newValue) {
			if (!_hasField(fieldName)) { return; }

			return _this.formFields[fieldName].setNewValue(newValue);
		};

		function _getField(fieldName) {
			if (!_hasField(fieldName)) { return; }

			return _this.formFields[fieldName];
		};

		function _isFieldChanged(fieldName) {
			if (!_hasField(fieldName)) { return; }

			return _this.formFields[fieldName].isChanged;
		};

		function _hasField(fieldName) {
			var output = false;

			if (fieldName in _this.formFields) {
				output = true;
			}
			else {
				var msg = [fieldName, ' - FormsControl: Field not mapped.'].join('');
				console.warn(msg);
			}

			return output;
		};

		return self;
	 };

	return {
		init: function (form, formData) {
			var formControlInstance;

			formControlInstance = new FormControl();
			formControlInstance.loadFormControl(form, formData);

			return formControlInstance
		},
		getInstance: function () {
			return new FormControl();
		}

	};
})();